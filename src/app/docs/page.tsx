import React from 'react';
import { Box } from '@mui/material';
import DocsPage from '@/components/pages/docs';
import Footer from '@/components/UI/Footer';
import Header from '@/components/UI/Header';
import MetadataHeader from '@/utils/SEO/MetadataHeader';

export default function page() {
  return (
    <>
      <MetadataHeader title="Documentation - Design System Manager" description="Complete documentation for our design system manager. Learn how to upload, manage, and export your design tokens. Step-by-step guides, API references, and best practices." imageUrl="/images/og-docs-image.jpg" url="https://designsystemmanager.com/docs" keywords="documentation, guides, tutorials, design system documentation, API docs, user manual, getting started, best practices" type="article" author="Design System Manager Team" publishedTime="2024-01-05" modifiedTime="2024-01-15" section="docs" noIndex={false} canonicalUrl="https://designsystemmanager.com/docs" />
      <Box component={'main'}>
        <Header />
        <Box mx={2}>
          <DocsPage />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
