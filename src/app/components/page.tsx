'use client';

import React from 'react';
import { Box } from '@mui/material';

// Components
import ComponentsSection from '@/components/pages/components';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';
import MetadataHeader from '@/utils/SEO/MetadataHeader';

export default function page() {
  return (
    <>
      <MetadataHeader title="Component Library - Design System Manager" description="Explore our comprehensive component library with 100+ ready-to-use UI components, design tokens, and customization options. Accelerate your development with pre-built React, Vue, and Angular components." imageUrl="/images/og-components-image.jpg" url="https://designsystemmanager.com/components" keywords="UI components, React components, Vue components, Angular components, design system components, component library, UI kit, frontend components" type="product" author="Design System Manager Team" publishedTime="2024-01-10" modifiedTime="2024-01-15" section="components" noIndex={false} canonicalUrl="https://designsystemmanager.com/components" />
      <Box component={'main'}>
        <Header />
        <Box mx={2}>
          <ComponentsSection />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
