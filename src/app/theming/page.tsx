'use client';

import React from 'react';
import Theming from '@/components/pages/theming';
import { Box } from '@mui/material';
import MetaDataHeader from '@/utils/SEO/MetadataHeader';

export default function page() {
  return (
    <Box>
      <MetaDataHeader title="Theme Explorer | UI Design Inspiration & Color Palettes" description="Browse our collection of beautiful UI themes inspired by top Iranian tech companies. Create, share, and discover color palettes, typography, and design systems." keywords="theme explorer, ui themes, color schemes, design inspiration, iranian tech companies, digikala colors, snapp design, tapsi ui, web design, frontend development" ogTitle="Theme Explorer - UI Design Inspiration Gallery" ogDescription="Get inspired by professional UI themes and color palettes. Perfect for designers and developers looking for modern design inspiration." ogImage="/images/theme-explorer-og.jpg" ogUrl="https://yoursite.com/theme-explorer" twitterTitle="Theme Explorer - Design Inspiration Gallery" twitterDescription="Discover beautiful UI themes and color combinations used by popular Iranian companies. Share your own creations!" twitterImage="/images/theme-explorer-twitter.jpg" />
      <Theming />
    </Box>
  );
}
