// ═══════════════════════════════════════════════════════════════
//  IMAGE OPTIMIZER  (one-off / re-runnable)
//  Resizes + recompresses the heaviest assets in place so the site
//  ships far fewer bytes. Re-run after adding large source images:
//    npm run optimize:images
//  Originals are committed to git, so changes are reversible.
// ═══════════════════════════════════════════════════════════════

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

// Each job: in/out paths (relative to project root), max width, encoder.
const jobs = [
  // 1.3 MB video-thumbnail PNG -> compact JPEG (rendered in a 16/9 card).
  { in: 'public/absthumb.png', out: 'public/absthumb.jpg', width: 1280, encoder: (p) => p.jpeg({ quality: 80, mozjpeg: true }) },
  // Brand logo: keep PNG (transparency) but cap size + compress.
  { in: 'public/logo.png', out: 'public/logo.png', width: 512, encoder: (p) => p.png({ compressionLevel: 9, palette: true, quality: 80 }) },
  // Team avatars: displayed ~208px max -> 2x for retina.
  ...['avatar1', 'avatar2', 'avatar3', 'avatar4', 'avatar5'].map((name) => ({
    in: `src/assets/${name}.jpg`,
    out: `src/assets/${name}.jpg`,
    width: 416,
    encoder: (p) => p.jpeg({ quality: 80, mozjpeg: true }),
  })),
];

let before = 0;
let after = 0;

for (const job of jobs) {
  const inPath = resolve(root, job.in);
  const outPath = resolve(root, job.out);

  // Read into a buffer first so in-place (in === out) overwrites don't
  // collide with sharp's lazy file handle (fails on Windows otherwise).
  const inputBuffer = readFileSync(inPath);
  const inSize = inputBuffer.length;
  const pipeline = job.encoder(
    sharp(inputBuffer).rotate().resize({ width: job.width, withoutEnlargement: true }),
  );
  const buffer = await pipeline.toBuffer();
  writeFileSync(outPath, buffer);

  before += inSize;
  after += buffer.length;
  console.log(`  ${job.in.padEnd(26)} ${kb(inSize).padStart(8)} -> ${kb(buffer.length).padStart(8)}  (${job.out})`);
}

console.log(`\n✓ optimized ${jobs.length} images: ${kb(before)} -> ${kb(after)} (saved ${kb(before - after)})`);
