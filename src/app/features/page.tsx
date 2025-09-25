import { Box } from '@mui/material';
import React from 'react';
import Features from '@/components/pages/features';
import MetadataHeader from '@/utils/SEO/MetadataHeader';

export default function page() {
  return (
    <>
      <MetadataHeader title="Advanced Design System Features - Manage Colors, Typography & Components" description="Explore our comprehensive suite of design system features: automated color palette generation, responsive typography scales, component library management, design token export, and real-time collaboration tools." imageUrl="/images/og-features-image.jpg" url="https://designsystemmanager.com/features" keywords="design system features, color palette generator, typography scale tool, component library management, design token exporter, CSS variables generator, style guide automation, design workflow optimization, team collaboration tools, version control for design systems" type="product" author="Design System Manager Team" publishedTime="2024-01-10" modifiedTime="2024-01-18" section="features" noIndex={false} canonicalUrl="https://designsystemmanager.com/features" />
      <Box component="main" sx={{ minHeight: '100vh' }}>
        <Features />
      </Box>
    </>
  );
}
