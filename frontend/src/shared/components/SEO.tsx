import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'CodeSprout';
const SITE_URL = (import.meta.env.VITE_SITE_URL as string) || 'https://codesprout.com';
const DEFAULT_OG = `${SITE_URL}/og-cover.png`;

export interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  keywords?: string[];
  noindex?: boolean;
  jsonLd?: Record<string, any> | Record<string, any>[];
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_OG,
  type = 'website',
  keywords = [],
  noindex = false,
  jsonLd,
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const fullDescription = description.length > 160 ? `${description.slice(0, 157)}...` : description;

  const baseKeywords = ['DSA', 'coding interview', 'data structures', 'algorithms', 'coding patterns', 'leetcode', 'coding practice', 'interview prep'];
  const allKeywords = Array.from(new Set([...keywords, ...baseKeywords])).join(', ');

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${SITE_URL}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${SITE_URL}${image}`} />
      <meta name="twitter:site" content="@codesprout" />

      <meta name="theme-color" content="#0B1020" />
      <meta name="format-detection" content="telephone=no" />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

export const buildFaqJsonLd = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

export const buildOrganizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [
    'https://twitter.com/codesprout',
    'https://github.com/omprakashkoshta7-web/code-frontend',
  ],
});

export const buildSoftwareApplicationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  description: 'Master coding patterns with cheat sheets, visualizer, and curated DSA interview questions.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '10000' },
});

export const buildBreadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`,
  })),
});
