// ============================================================
// .github/scripts/build.mjs — PD-04 // FIELD REPORTS
// ------------------------------------------------------------
// Собирает публикуемую копию отчётов в dist/ из КОРНЯ репо:
//   .html / .js / .css → сжимаются, комментарии убираются
//                        (имена переменных НЕ трогаются)
//   всё остальное      → копируется как есть (картинки, mp3,
//                        кириллица и пробелы в именах — ок)
// Служебное (.github, verify-reports.js и т.п.) на сайт не идёт.
// Исходники в репо не меняются — создаётся только dist/
// ============================================================
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { minify as minifyJS } from 'terser';
import CleanCSS from 'clean-css';
import { minify as minifyHTML } from 'html-minifier-terser';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'dist');

// Папки, которые не публикуются
const EXCLUDE_DIRS = new Set(['.git', '.github', 'dist', 'node_modules']);
// Файлы, которые не публикуются (инструменты/служебное)
const EXCLUDE_FILES = new Set([
  'verify-reports.js',
  'package.json',
  'package-lock.json',
  'README.md',
]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.') && entry.name !== '.nojekyll') continue; // .gitignore и пр.
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.has(entry.name)) continue;
      await walk(full);
    } else {
      if (EXCLUDE_FILES.has(entry.name)) continue;
      await processFile(full);
    }
  }
}

async function processFile(srcPath) {
  const rel = path.relative(ROOT, srcPath);
  const outPath = path.join(OUT, rel);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  const ext = path.extname(srcPath).toLowerCase();

  try {
    if (ext === '.js') {
      const code = await fs.readFile(srcPath, 'utf8');
      const result = await minifyJS(code, {
        mangle: false,
        compress: { drop_console: false },
        format: { comments: false },
      });
      await fs.writeFile(outPath, result.code ?? code, 'utf8');

    } else if (ext === '.css') {
      const code = await fs.readFile(srcPath, 'utf8');
      const result = new CleanCSS({ level: 1 }).minify(code);
      await fs.writeFile(outPath, result.styles ?? code, 'utf8');

    } else if (ext === '.html' || ext === '.htm') {
      const code = await fs.readFile(srcPath, 'utf8');
      const result = await minifyHTML(code, {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
      });
      await fs.writeFile(outPath, result, 'utf8');

    } else {
      await fs.copyFile(srcPath, outPath);
    }
  } catch (err) {
    // сжатие споткнулось — публикуем файл как есть, сборку не роняем
    console.warn(`[build] не удалось сжать ${rel}, копирую как есть:`, err.message);
    await fs.copyFile(srcPath, outPath);
  }
}

await fs.rm(OUT, { recursive: true, force: true });
await walk(ROOT);
console.log('[build] готово → dist/');
