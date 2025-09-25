'use client';

import React from 'react';
import { Box } from '@mui/material';
import Templates from '@/components/pages/templates';
import MetadataHeader from '@/utils/SEO/MetadataHeader';

export default function page() {
  return (
    <>
      <MetadataHeader title="Design System Templates - Export to CSS, React, Figma & More" description="Programmatically control your design system with templates that export to CSS variables, React components, Figma libraries, and design tokens. Manage color schemes, typography scales, and spacing systems efficiently." imageUrl="/images/og-templates-image.jpg" url="https://designsystemmanager.com/templates" keywords="design system export templates, CSS variables templates, React component templates, Figma design system, design token templates, developer tools, design-to-code, design system automation, style dictionary templates" type="product" author="Design System Manager Team" publishedTime="2024-01-12" modifiedTime="2024-01-15" section="templates" noIndex={false} canonicalUrl="https://designsystemmanager.com/templates" />
      <Box mx={2}>
        <Templates />
      </Box>
    </>
  );
}
