import React from 'react';
import { Box } from '@mui/material';

import Header from '@/components/UI/Header';
import PricingSection from '@/components/UI/home/PricingSection';
import FeaturesSection from '@/components/UI/home/FeaturesSection';
import Footer from '@/components/UI/Footer';

export default function Features() {
  return (
    <Box>
      <Header />
      <Box mx={2}>
        <FeaturesSection />
        <PricingSection />
      </Box>
      <Footer />
    </Box>
  );
}
