'use client';

import React from 'react';
import { Container, Typography, Grid2, Card, CardContent, Box, Chip } from '@mui/material';
import { useTheme } from '@mui/material';
import { IoMdBrush, IoMdCode, IoMdColorPalette, IoMdTrendingUp, IoMdSync } from 'react-icons/io';
import { IoAccessibility } from 'react-icons/io5';

export default function FeaturesSection() {
  const theme = useTheme();

  const features = [
    {
      icon: <IoMdColorPalette style={{ fontSize: 48 }} />,
      title: 'Color System',
      description: 'Create and manage complete color palettes with automatic shade generation and accessibility compliance.',
      color: theme.palette.primary.main,
      features: ['Shade Generator', 'Contrast Checker', 'Dark Mode Ready'],
      gradient: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.primary.light}20)`,
    },
    {
      icon: <IoMdBrush style={{ fontSize: 48 }} />,
      title: 'Typography Scale',
      description: 'Design consistent typography systems with modular scales and responsive font sizing.',
      color: theme.palette.secondary.main,
      features: ['Modular Scale', 'Responsive Typography', 'Font Pairing'],
      gradient: `linear-gradient(135deg, ${theme.palette.secondary.main}20, ${theme.palette.secondary.light}20)`,
    },
    {
      icon: <IoMdCode style={{ fontSize: 48 }} />,
      title: 'Code Export',
      description: 'Export your design system to multiple formats including CSS, React, and design tokens.',
      color: theme.palette.success.main,
      features: ['CSS Variables', 'React Themes', 'Design Tokens'],
      gradient: `linear-gradient(135deg, ${theme.palette.success.main}20, ${theme.palette.success.light}20)`,
    },
    {
      icon: <IoMdSync style={{ fontSize: 48 }} />,
      title: 'Sync & Collaborate',
      description: 'Real-time synchronization and team collaboration features for seamless workflow.',
      color: theme.palette.warning.main,
      features: ['Real-time Sync', 'Team Sharing', 'Version Control'],
      gradient: `linear-gradient(135deg, ${theme.palette.warning.main}20, ${theme.palette.warning.light}20)`,
    },
    {
      icon: <IoAccessibility style={{ fontSize: 48 }} />,
      title: 'Accessibility',
      description: 'Built-in accessibility checks and WCAG compliance validation for inclusive design.',
      color: theme.palette.info.main,
      features: ['WCAG Compliance', 'Color Contrast', 'Screen Reader Ready'],
      gradient: `linear-gradient(135deg, ${theme.palette.info.main}20, ${theme.palette.info.light}20)`,
    },
    {
      icon: <IoMdTrendingUp style={{ fontSize: 48 }} />,
      title: 'Analytics',
      description: 'Track design system usage and get insights into component adoption and performance.',
      color: theme.palette.error.main,
      features: ['Usage Analytics', 'Performance Metrics', 'Adoption Rates'],
      gradient: `linear-gradient(135deg, ${theme.palette.error.main}20, ${theme.palette.error.light}20)`,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Chip label="Features" color="primary" variant="filled" sx={{ mb: 2, fontWeight: 'bold', fontSize: '0.875rem', height: 32, px: 2 }} />
        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 2 }}>
          Everything You Need
        </Typography>
        <Typography variant="h6" color="text.primary" sx={{ maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
          Powerful tools to create, manage, and scale your design system with enterprise-grade features and intuitive workflows.
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid2 container spacing={4}>
        {features.map((feature, index) => (
          <Grid2 key={index} size={{ xs: 12, md: 6, lg: 4 }}>
            <Card
              sx={{
                ...styles.card,
                background: theme.palette.background.paper,
                boxShadow: `0 3px 6px ${feature.color}20, 0 2px 4px ${feature.color}10`,
                '&:before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: feature.gradient, transform: 'scaleX(0)', transition: 'transform 0.3s ease' },
                '&:hover': { transform: 'translateY(-8px)', boxShadow: `0 20px 40px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`, borderColor: feature.color, '&:before': { transform: 'scaleX(1)' }, '& .feature-icon': { transform: 'scale(1.1)', color: feature.color } },
              }}
            >
              <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Icon Container */}
                <Box className="feature-icon" sx={{ display: 'inline-flex', padding: 2, borderRadius: 3, background: feature.gradient, color: feature.color, marginBottom: 3, transition: 'all 0.3s ease', width: 'fit-content' }}>
                  {feature.icon}
                </Box>

                {/* Title */}
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
                  {feature.title}
                </Typography>

                {/* Description */}
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
                  {feature.description}
                </Typography>

                {/* Feature Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {feature.features.map((tag, tagIndex) => (
                    <Chip key={tagIndex} label={tag} size="small" variant="outlined" sx={{ borderColor: feature.color, color: feature.color, backgroundColor: `${feature.color}10`, fontWeight: '500', fontSize: '0.75rem' }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Bottom CTA */}
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Ready to transform your design workflow?
        </Typography>
      </Box>
    </Container>
  );
}

const styles = {
  card: {
    height: '100%',
    borderRadius: 4,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
  },
};
