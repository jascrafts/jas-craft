// ═══════════════════════════════════════════════════════════════
//  SITEMAP GENERATOR
//  Writes public/sitemap.xml from the static routes + every blog
//  slug in src/data/blogPosts.js. Runs automatically before build
//  (see package.json "build" script) so the sitemap never goes stale.
// ═══════════════════════════════════════════════════════════════

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import blogPosts from '../src/data/blogPosts.js';

const SITE_URL = 'https://jascraft.in';
const __dirname = dirname(fileURLToPath(import.meta.url));

// 'July 30, 2024' -> '2024-07-30' (omitted if unparseable). Reads local
// date components to avoid a UTC timezone rollback to the previous day.
const toIso = (display) => {
  const d = new Date(display);
  if (Number.isNaN(d.getTime())) return undefined;
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/work', changefreq: 'monthly', priority: '0.8' },
  { path: '/team', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-of-service', changefreq: 'yearly', priority: '0.3' },
  { path: '/cookie-policy', changefreq: 'yearly', priority: '0.3' },
];

const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  changefreq: 'monthly',
  priority: '0.7',
  lastmod: toIso(post.date),
}));

const urls = [...staticRoutes, ...blogRoutes]
  .map(({ path, changefreq, priority, lastmod }) => {
    const loc = `${SITE_URL}${path}`;
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n');
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outPath, xml, 'utf8');
console.log(`✓ sitemap.xml written with ${staticRoutes.length + blogRoutes.length} URLs`);
