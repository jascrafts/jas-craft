// ═══════════════════════════════════════════════════════════════
//  CENTRAL SITE / SEO CONFIG
//  One place to edit brand-wide SEO values. Used by <Seo>, the
//  JSON-LD structured data, the sitemap generator and robots.txt.
// ═══════════════════════════════════════════════════════════════

// No trailing slash. Used to build absolute canonical / OG URLs.
export const SITE_URL = 'https://jascraft.in';

export const SITE_NAME = 'JAS Craft';
export const SITE_LEGAL_NAME = 'JAS Craft';

// Default social-share / fallback OG image (absolute URL built below).
export const DEFAULT_OG_IMAGE = '/logo.png';

export const DEFAULT_TITLE =
  'JAS Craft — Digital Marketing Agency in New Delhi | We Make Brands Grow';

export const TITLE_TEMPLATE = '%s | JAS Craft';

export const DEFAULT_DESCRIPTION =
  'JAS Craft is a New Delhi based digital marketing agency that helps ambitious brands grow with paid ads, social media marketing, SEO, content and marketing automation. Get a free growth audit.';

export const TWITTER_HANDLE = '@jas_click_craft';

// Used by Organization JSON-LD.
export const ORG = {
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: 'jascrafts72@gmail.com',
  telephone: '+91-9217233989',
  foundingDate: '2026',
  address: {
    locality: 'New Delhi',
    region: 'Delhi',
    country: 'IN',
  },
  sameAs: [
    'https://www.instagram.com/jas_click_craft',
  ],
};

// Build an absolute URL from a site-relative path or pass through an
// already-absolute URL unchanged.
export function absoluteUrl(pathOrUrl = '/') {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}
