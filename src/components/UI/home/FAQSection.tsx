'use client';

import React, { useState } from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useTheme } from '@mui/material';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

export default function FAQSection() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : null);
  };

  const faqs = [
    {
      question: 'How does the AI color optimization work?',
      answer: "Our AI analyzes your brand colors and automatically generates accessible color palettes with proper contrast ratios, ensuring WCAG compliance while maintaining your brand's visual identity.",
    },
    {
      question: 'Can I export my design system to different frameworks?',
      answer: 'Yes! We support exports for React, Vue, Angular, CSS variables, Tailwind configs, and design tokens for Figma and other design tools.',
    },
    {
      question: 'Is there a limit to the number of projects I can create?',
      answer: 'The Starter plan includes 3 projects, while Pro and Enterprise offer unlimited projects. You can always upgrade your plan as your needs grow.',
    },
    {
      question: 'How does team collaboration work?',
      answer: 'Team members can collaborate in real-time, leave comments, suggest changes, and maintain version history. Role-based permissions ensure proper access control.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide email support for all plans, priority support for Pro users, and dedicated account management for Enterprise customers with SLAs.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time. For yearly plans, we offer prorated refunds for unused months.',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }} id="faq">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 2 }}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
          Get answers to common questions about our platform and how it can transform your design workflow.
        </Typography>
      </Box>

      <Box>
        {faqs.map((faq, index) => (
          <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} sx={{ background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}`, borderRadius: 2, mb: 2, '&:before': { display: 'none' }, boxShadow: 'none' }}>
            <AccordionSummary expandIcon={expanded === `panel${index}` ? <IoMdRemove /> : <IoMdAdd />} sx={{ fontWeight: 'bold', fontSize: '1.1rem', '& .MuiAccordionSummary-expandIconWrapper': { color: theme.palette.primary.main } }}>
              {faq.question}
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
