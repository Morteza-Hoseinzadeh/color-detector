'use client';

import React from 'react';
import { Box, Typography, Button, Container, Grid2, Chip } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { IoArrowForward } from 'react-icons/io5';
import { MdVisibility } from 'react-icons/md';
import DesignSystemModel from './DesignSystemModel';

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const stats = [
    { number: '50+', label: 'Color Variables' },
    { number: '10+', label: 'Typography Scales' },
    { number: '∞', label: 'Custom Themes' },
    { number: '100%', label: 'Accessibility' },
  ];

  return (
    <Box sx={{ mt: 2, borderRadius: '16px', py: 4, background: theme.palette.mode === 'dark' ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)` : `linear-gradient(135deg, ${theme.palette.primary.light}20 0%, ${theme.palette.secondary.light}20 100%)`, minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <Box sx={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`, animation: 'float 6s ease-in-out infinite' }} />
      <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, ${theme.palette.secondary.main}20 0%, transparent 70%)`, animation: 'float 8s ease-in-out infinite 2s' }} />

      <Container maxWidth="lg">
        <Grid2 container spacing={6} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Chip label="Design System Manager" color="primary" variant="filled" sx={{ mb: 2, fontWeight: 'bold' }} />

              <Typography variant={isMobile ? 'h3' : 'h2'} component="h1" fontWeight="bold" gutterBottom sx={{ background: theme.palette.mode === 'dark' ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` : `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                Build Consistent
                <br />
                Design Systems
              </Typography>

              <Typography variant="h6" color="text.primary" sx={{ mb: 4, lineHeight: 1.6 }}>
                Create, manage, and export your design tokens with ease. Perfect for developers and designers working on scalable design systems with dark mode support.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" size="large" endIcon={<IoArrowForward />} sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 'bold' }}>
                  Get Started
                </Button>

                <Button variant="outlined" size="large" startIcon={<MdVisibility />} sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 'bold' }}>
                  Live Demo
                </Button>
              </Box>

              {/* Stats */}
              <Grid2 container spacing={3} sx={{ mt: 6 }}>
                {stats.map((stat, index) => (
                  <Grid2 key={index} size={6}>
                    <Typography variant="h4" fontWeight="bold" color="primary">
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      {stat.label}
                    </Typography>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <DesignSystemModel />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
