// components/seo/MetadataHeader.tsx
'use client';

import useMetadata from '@/utils/hooks/useMetadata';
import React from 'react';

interface MetadataProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  keywords?: string;
  type?: 'website' | 'article' | 'product' | 'software';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: 'components' | 'docs' | 'api' | 'templates' | 'pricing' | 'contact';
  noIndex?: boolean;
  canonicalUrl?: string;
}

const MetadataHeader: React.FC<MetadataProps | any> = ({ title, description, imageUrl = '/images/og-image.jpg', url = 'https://designsystemmanager.com', keywords, type = 'website', author = 'Design System Team', publishedTime, modifiedTime, section, noIndex = false, canonicalUrl }) => {
  // Get dynamic content based on section
  const getDynamicTitle = () => {
    if (title) return title;

    const sectionTitles: any = {
      components: `Component Library - Design System Manager`,
      docs: `Documentation - Design System Manager`,
      api: `API Reference - Design System Manager`,
      templates: `Templates - Design System Manager`,
      pricing: `Pricing - Design System Manager`,
      contact: `Contact - Design System Manager`,
    };

    return section ? sectionTitles[section] : 'Design System Manager - Build Consistent UIs Faster';
  };

  const getDynamicDescription = () => {
    if (description) return description;

    const sectionDescriptions: any = {
      components: 'Explore our comprehensive component library with ready-to-use UI components, design tokens, and customization options.',
      docs: 'Complete documentation for our design system manager. Learn how to upload, manage, and export your design tokens.',
      api: 'Full API reference for integrating our design system manager with your applications and workflows.',
      templates: 'Get started quickly with our pre-built templates and design system starters.',
      pricing: 'Choose the right plan for your team. Free tier available with unlimited personal projects.',
      contact: 'Get in touch with our team for support, partnerships, or custom enterprise solutions.',
    };

    return section ? sectionDescriptions[section] : "Upload and manage your website's design system. Color palettes, typography, shadows, and border-radius management made easy.";
  };

  const getDynamicKeywords = () => {
    if (keywords) return keywords;

    const sectionKeywords: any = {
      components: 'UI components, React components, Vue components, Angular components, design system components',
      docs: 'documentation, guides, tutorials, design system documentation',
      api: 'API, REST API, integration, developers, API documentation',
      templates: 'templates, starters, design system templates, quick start',
      pricing: 'pricing, plans, subscription, free tier, enterprise',
      contact: 'contact, support, help, sales, partnership',
    };

    const baseKeywords = 'design system, UI components, color palette, typography, CSS variables, React components, design tokens';
    return section ? `${baseKeywords}, ${sectionKeywords[section]}` : baseKeywords;
  };

  const metadata = useMetadata({
    title: getDynamicTitle(),
    description: getDynamicDescription(),
    imageUrl,
    url: canonicalUrl || url,
    keywords: getDynamicKeywords(),
    type,
    author,
    publishedTime,
    modifiedTime,
    noIndex,
    canonicalUrl,
  });

  // Generate schema.org structured data
  const generateStructuredData = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type === 'software' ? 'SoftwareApplication' : 'WebSite',
      name: metadata.title,
      description: metadata.description,
      url: metadata.url,
      author: {
        '@type': 'Organization',
        name: metadata.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Design System Manager',
        logo: {
          '@type': 'ImageObject',
          url: `${metadata.url}/assets/logo/chroma-ui.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': metadata.url,
      },
    };

    if (type === 'software') {
      return {
        ...baseSchema,
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Web-Based',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1247',
          bestRating: '5',
        },
      };
    }

    return baseSchema;
  };

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content={metadata.author} />

      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.imageUrl} />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:type" content={metadata.type} />
      <meta property="og:site_name" content={metadata.siteName} />
      <meta property="og:locale" content={metadata.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.imageUrl} />
      <meta name="twitter:creator" content={metadata.twitterHandle} />
      <meta name="twitter:site" content={metadata.twitterHandle} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1976d2" />

      {/* Canonical URL */}
      <link rel="canonical" href={metadata.url} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />

      {/* Additional SEO Enhancements */}
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Mobile Specific */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Design System Manager" />

      {/* Favicons */}
      <link rel="icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      {/* Preload critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  );
};

export default MetadataHeader;
