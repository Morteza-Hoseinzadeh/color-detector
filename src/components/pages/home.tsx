'use client';

import React from 'react';
import { Box } from '@mui/material';
import Header from '@/components/UI/Header';
import HeroSection from '@/components/UI/home/HeroSection';
import FeaturesSection from '@/components/UI/home/FeaturesSection';
import CTASection from '@/components/UI/home/CTASection';
import PricingSection from '@/components/UI/home/PricingSection';
import TestimonialsSection from '@/components/UI/home/TestimonialsSection';
import FAQSection from '@/components/UI/home/FAQSection';
import ContactSection from '@/components/UI/home/ContactSection';
import Footer from '@/components/UI/Footer';

export default function Home() {
  return (
    <Box>
      <Header />
      <Box mx={2}>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </Box>
      <CTASection />
      <Footer />
    </Box>
  );
}
