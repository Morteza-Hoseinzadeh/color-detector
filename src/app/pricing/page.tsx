import React from 'react';
import { Box } from '@mui/material';

import Header from '@/components/UI/Header';
import PricingSection from '@/components/UI/home/PricingSection';
import Footer from '@/components/UI/Footer';
import ContactSection from '@/components/UI/home/ContactSection';

import MetadataHeader from '@/utils/SEO/MetadataHeader';

export default function page() {
  return (
    <>
      <MetadataHeader title="Pricing Plans - Design System Manager" description="Choose the right plan for your team. Free tier available with unlimited personal projects. Enterprise solutions with advanced features and dedicated support." imageUrl="/images/og-pricing-image.jpg" url="https://designsystemmanager.com/pricing" keywords="pricing, plans, subscription, free tier, enterprise pricing, cost, pricing plans, team pricing, business plans" type="product" author="Design System Manager Team" publishedTime="2024-01-08" modifiedTime="2024-01-15" section="pricing" noIndex={false} canonicalUrl="https://designsystemmanager.com/pricing" />
      <Box component={'main'}>
        <Header />
        <Box mx={2}>
          <PricingSection />
          <ContactSection />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
