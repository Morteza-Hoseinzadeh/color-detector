// app/page.tsx
'use client';

import React from 'react';
import { Box } from '@mui/material';
import Home from '@/components/pages/home';
import MetadataHeader from '@/utils/SEO/MetadataHeader';

export default function HomePage() {
  return (
    <>
      <MetadataHeader title="Design System Manager - Build Consistent UIs Faster" description="Upload and manage your website's design system. Color palettes, typography, shadows, and border-radius management made easy. Streamline your design workflow with our comprehensive tool." imageUrl="/images/og-home-image.jpg" url="https://designsystemmanager.com" keywords="design system manager, UI consistency, design tokens, component library, CSS variables, design workflow, frontend development, UI/UX design, design automation" type="website" author="Design System Manager Team" publishedTime="2024-01-01" modifiedTime="2024-01-15" section="/" noIndex={false} canonicalUrl="https://designsystemmanager.com" />
      <Box component="main">
        <Home />
      </Box>
    </>
  );
}
