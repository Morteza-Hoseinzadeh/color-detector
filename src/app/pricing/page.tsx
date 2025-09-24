import React from 'react';
import { Box } from '@mui/material';
import Header from '@/components/UI/Header';
import PricingSection from '@/components/UI/home/PricingSection';
import Footer from '@/components/UI/Footer';
import ContactSection from '@/components/UI/home/ContactSection';

export default function page() {
  return (
    <Box>
      <Header />
      <Box mx={2}>
        <PricingSection />
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  );
}
