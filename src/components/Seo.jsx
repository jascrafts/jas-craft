import { Head } from 'vite-react-ssg';
import {
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  absoluteUrl,
} from '../seo/siteConfig';

/**
 * Per-page <head> manager. Renders title, description, canonical,
 * Open Graph + Twitter cards and optional JSON-LD structured data.
 *
 * Powered by vite-react-ssg's <Head> (react-helmet-async under the
 * hood), so these tags are baked into the pre-rendered HTML at build
 * time and updated on client navigation.
 *
 * @param {string}  title        Page title (without the brand suffix).
 * @param {string}  description  Meta description.
 * @param {string}  path         Site-relative path for the canonical URL, e.g. '/work'.
 * @param {string}  image        OG/Twitter image (relative path or absolute URL).
 * @param {'website'|'article'} type  Open Graph type.
 * @param {boolean} noindex      When true, asks crawlers not to index the page.
 * @param {object}  article      { publishedTime, modifiedTime, section } for type="article".
 * @param {object|object[]} jsonLd  Structured data object(s) injected as ld+json.
 */
export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  article,
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      {type === 'article' && article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {type === 'article' && article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {type === 'article' && article?.section && (
        <meta property="article:section" content={article.section} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data */}
      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
}
