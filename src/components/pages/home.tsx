'use client';

import React from 'react';
import { Box } from '@mui/material';
import Header from '@/components/UI/Header';
import HeroSection from '@/components/UI/home/HeroSection';
import FeaturesSection from '@/components/UI/home/FeaturesSection';
import CTASection from '@/components/UI/home/CTASection';

export default function Home() {
  return (
    <Box>
      <Box mx={2}>
        <Header />
        <HeroSection />
        <FeaturesSection />
      </Box>
      <CTASection />
    </Box>
  );
}
