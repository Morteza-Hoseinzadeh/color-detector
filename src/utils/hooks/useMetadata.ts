// utils/hooks/useMetadata.ts
import { useMemo } from 'react';

interface UseMetadataProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  keywords?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
}

const useMetadata = ({ title = 'Design System Manager - Build Consistent UIs Faster', description = "Upload and manage your website's design system. Color palettes, typography, shadows, and border-radius management made easy.", imageUrl = '/assets/logo/chroma-ui.png', url = 'https://designsystemmanager.com', keywords = 'design system, UI components, color palette, typography, CSS variables, React components, design tokens', type = 'website', author = 'Design System Team', publishedTime, modifiedTime, noIndex = false, canonicalUrl }: UseMetadataProps) => {
  const metadata = useMemo(() => {
    // Use canonicalUrl if provided, otherwise construct from url
    const finalUrl = canonicalUrl || url;
    const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${url}${imageUrl}`;

    // Ensure title includes brand name if not already present
    const finalTitle = title.includes('Design System Manager') ? title : `${title} - Design System Manager`;

    return {
      // Basic metadata
      title: finalTitle,
      description: description.trim(),
      imageUrl: fullImageUrl,
      url: finalUrl,
      keywords: keywords
        .split(',')
        .map((k) => k.trim())
        .join(', '),
      type,
      author,

      // Dates
      publishedTime: publishedTime || new Date().toISOString().split('T')[0],
      modifiedTime: modifiedTime || new Date().toISOString().split('T')[0],

      // SEO flags
      noIndex,

      // Social media
      twitterHandle: '@designsystemmgr',

      // Additional
      siteName: 'Design System Manager',
      locale: 'en_US',
    };
  }, [title, description, imageUrl, url, keywords, type, author, publishedTime, modifiedTime, noIndex, canonicalUrl]);

  return metadata;
};

export default useMetadata;
