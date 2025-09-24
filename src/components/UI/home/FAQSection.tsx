'use client';

import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, Collapse, IconButton, Chip } from '@mui/material';
import { useTheme } from '@mui/material';
import { IoChevronDown, IoChevronUp, IoHelpCircle, IoSparkles } from 'react-icons/io5';

export default function FAQSection() {
  const theme = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      title: 'AI Color Optimization',
      question: 'How does the AI color optimization work?',
      answer: "Our AI analyzes your brand colors and automatically generates accessible color palettes with proper contrast ratios, ensuring WCAG compliance while maintaining your brand's visual identity.",
      category: 'AI Features',
    },
    {
      title: 'Framework Export',
      question: 'Can I export my design system to different frameworks?',
      answer: 'Yes! We support exports for React, Vue, Angular, CSS variables, Tailwind configs, and design tokens for Figma and other design tools.',
      category: 'Export & Integration',
    },
    {
      title: 'Project Limits',
      question: 'Is there a limit to the number of projects I can create?',
      answer: 'The Starter plan includes 3 projects, while Pro and Enterprise offer unlimited projects. You can always upgrade your plan as your needs grow.',
      category: 'Plans & Pricing',
    },
    {
      title: 'Team Collaboration',
      question: 'How does team collaboration work?',
      answer: 'Team members can collaborate in real-time, leave comments, suggest changes, and maintain version history. Role-based permissions ensure proper access control.',
      category: 'Collaboration',
    },
    {
      title: 'Support Options',
      question: 'What kind of support do you offer?',
      answer: 'We provide email support for all plans, priority support for Pro users, and dedicated account management for Enterprise customers with SLAs.',
      category: 'Support',
    },
    {
      title: 'Subscription Flexibility',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time. For yearly plans, we offer prorated refunds for unused months.',
      category: 'Billing',
    },
  ];

  const categoryColors: any = {
    'AI Features': theme.palette.primary.main,
    'Export & Integration': theme.palette.secondary.main,
    'Plans & Pricing': theme.palette.success.main,
    Collaboration: theme.palette.warning.main,
    Support: theme.palette.info.main,
    Billing: theme.palette.error.main,
  };

  return (
    <Box sx={{ background: theme.palette.background.default, py: 12 }} id="faq">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip label="Support" color="primary" variant="filled" sx={{ mb: 2, fontWeight: 'bold', fontSize: '0.8rem', height: 28, px: 2 }} />

          <Box sx={styles.headerIcon}>
            <IoHelpCircle size={32} />
          </Box>

          <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ background: theme.palette.mode === 'dark' ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` : `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Frequently Asked Questions
          </Typography>

          <Typography variant="h4" fontWeight="600" color="primary.main" sx={{ mb: 2 }}>
            Get Instant Answers
          </Typography>

          <Typography variant="h6" color="text.primary" sx={styles.sectionSubtitle}>
            Everything you need to know about our design system platform
          </Typography>

          <Box sx={styles.statsContainer}>
            <Box sx={styles.statItem}>
              <Typography variant="h3" fontWeight="bold" color="primary.main">
                50+
              </Typography>
              <Typography variant="body2" color="text.primary">
                Questions Answered
              </Typography>
            </Box>
            <Box sx={styles.statDivider} />
            <Box sx={styles.statItem}>
              <Typography variant="h3" fontWeight="bold" color="primary.main">
                99%
              </Typography>
              <Typography variant="body2" color="text.primary">
                Satisfaction Rate
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* FAQ Grid */}
        <Box sx={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <Card key={index} sx={{ ...styles.faqCard, borderColor: openIndex === index ? categoryColors[faq.category] : 'divider', boxShadow: openIndex === index ? `0 8px 32px ${categoryColors[faq.category]}20` : 'none' }}>
              <CardContent sx={styles.cardContent}>
                {/* Card Header with Title and Category */}
                <Box sx={styles.cardHeader}>
                  <Box sx={styles.titleSection}>
                    <Box sx={{ ...styles.categoryDot, backgroundColor: categoryColors[faq.category] }} />
                    <Typography variant="caption" sx={styles.categoryText}>
                      {faq.category}
                    </Typography>
                  </Box>
                  <IconButton onClick={() => handleToggle(index)} sx={styles.expandButton}>
                    {openIndex === index ? <IoChevronUp /> : <IoChevronDown />}
                  </IconButton>
                </Box>

                {/* FAQ Title */}
                <Typography variant="h5" component="h3" sx={styles.faqTitle}>
                  {faq.title}
                </Typography>

                {/* FAQ Question */}
                <Typography variant="h6" component="p" sx={styles.question} onClick={() => handleToggle(index)}>
                  {faq.question}
                </Typography>

                {/* Expandable Answer */}
                <Collapse in={openIndex === index}>
                  <Box sx={styles.answerContainer}>
                    <Box sx={styles.answerIcon}>
                      <IoSparkles size={16} />
                    </Box>
                    <Typography variant="body1" sx={styles.answer}>
                      {faq.answer}
                    </Typography>
                  </Box>
                </Collapse>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box sx={styles.ctaSection}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
            Still have questions?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Our support team is here to help you get the most out of our platform.
          </Typography>
          <Box sx={styles.ctaButtons}>
            <Typography component="a" href="#contact" sx={styles.contactLink}>
              Contact Support
            </Typography>
            <Typography component="a" href="#docs" sx={styles.docsLink}>
              View Documentation
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  headerIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    color: 'primary.main',
    marginBottom: '1.5rem',
  },
  sectionSubtitle: {
    maxWidth: 600,
    margin: '0 auto',
    lineHeight: 1.6,
    fontSize: { xs: '1.1rem', md: '1.3rem' },
  },
  sectionTitle: {
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    mb: 2,
    fontSize: { xs: '2.5rem', md: '3.5rem' },
    fontWeight: 'bold',
  },
  faqGrid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    mb: 8,
  },
  faqCard: {
    background: 'background.paper',
    border: '1px solid',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
    },
  },
  cardContent: {
    padding: '2.5rem',
    '&:last-child': {
      paddingBottom: '2.5rem',
    },
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: 2,
  },
  titleSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  categoryDot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
  },
  categoryText: {
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: 'text.secondary',
    fontSize: '0.8rem',
  },
  expandButton: {
    color: 'text.secondary',
    padding: '0.5rem',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: 'primary.main',
      backgroundColor: 'action.hover',
    },
  },
  faqTitle: {
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: 1.3,
    marginBottom: '1rem',
    color: 'text.primary',
  },
  question: {
    fontWeight: 600,
    fontSize: '1.1rem',
    lineHeight: 1.4,
    marginBottom: '1.5rem',
    cursor: 'pointer',
    color: 'text.secondary',
    pr: 4,
    transition: 'color 0.2s ease',
    '&:hover': {
      color: 'primary.main',
    },
  },
  answerContainer: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    paddingTop: '1rem',
    borderTop: '1px solid',
    borderColor: 'divider',
  },
  answerIcon: {
    color: 'primary.main',
    marginTop: '0.25rem',
    flexShrink: 0,
  },
  answer: {
    color: 'text.secondary',
    lineHeight: 1.7,
    flex: 1,
    fontSize: '1rem',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '4rem 2rem',
    background: 'linear-gradient(135deg, rgba(30, 144, 255, 0.05), rgba(137, 80, 247, 0.05))',
    borderRadius: '24px',
  },
  ctaButtons: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contactLink: {
    backgroundColor: 'primary.main',
    color: 'white',
    padding: '1rem 2.5rem',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    '&:hover': {
      background: 'primary.dark',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(30, 144, 255, 0.3)',
    },
  },
  docsLink: {
    color: 'primary.main',
    padding: '1rem 2.5rem',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    border: '2px solid',
    borderColor: 'primary.main',
    transition: 'all 0.2s ease',
    '&:hover': {
      background: 'primary.main',
      color: 'white',
      transform: 'translateY(-2px)',
    },
  },
  statsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
    mt: 4,
    p: 3,
    backgroundColor: 'background.paper',
    borderRadius: '16px',
    border: '1px solid',
    borderColor: 'divider',
    maxWidth: '400px',
    margin: '2rem auto 0',
    '@media (max-width: 600px)': {
      gap: '1.5rem',
      padding: '2rem 1rem',
    },
  },
  statItem: {
    textAlign: 'center',
  },
  statDivider: {
    width: '1px',
    height: '40px',
    backgroundColor: 'divider',
  },
};
