// ═══════════════════════════════════════════════════════════════
//  JSON-LD STRUCTURED DATA BUILDERS
//  Schema.org objects passed to <Seo jsonLd={...} />.
// ═══════════════════════════════════════════════════════════════

import { SITE_URL, SITE_NAME, ORG, absoluteUrl } from './siteConfig';

// Organization — emitted on the home page. Lets Google build a
// knowledge-panel style entity for the brand.
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: ORG.name,
  legalName: ORG.legalName,
  url: SITE_URL,
  logo: ORG.logo,
  email: ORG.email,
  telephone: ORG.telephone,
  foundingDate: ORG.foundingDate,
  address: {
    '@type': 'PostalAddress',
    addressLocality: ORG.address.locality,
    addressRegion: ORG.address.region,
    addressCountry: ORG.address.country,
  },
  sameAs: ORG.sameAs,
};

// WebSite — declares the canonical site entity.
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
};

// Article — emitted on each blog post.
export function articleSchema({ title, description, image, url, datePublished }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image ? [absoluteUrl(image)] : undefined,
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(url) },
    datePublished,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: ORG.logo },
    },
  };
}

// BreadcrumbList — pass [{ name, path }, ...] from root to current page.
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
