'use client';

import React from 'react';
import { Box } from '@mui/material';

// Components
import ComponentsSection from '@/components/pages/components';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';

export default function page() {
  return (
    <Box>
      <Header />
      <Box mx={2}>
        <ComponentsSection />
      </Box>
      <Footer />
    </Box>
  );
}
