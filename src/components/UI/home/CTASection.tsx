'use client';

import React from 'react';
import { Box, Typography, Button, Container, Grid2, Chip } from '@mui/material';
import { useTheme } from '@mui/material';
import { IoMdDownload, IoMdRocket, IoMdStar, IoMdTrendingUp } from 'react-icons/io';

export default function CTASection() {
  const theme = useTheme();

  const benefits = [
    { icon: <IoMdRocket />, text: 'Instant Setup' },
    { icon: <IoMdStar />, text: 'AI Optimized' },
    { icon: <IoMdTrendingUp />, text: 'Scale Easily' },
  ];
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', background: theme.palette.mode === 'dark' ? `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)` : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`, color: 'white', py: 13, px: { xs: 2, sm: 3 } }}>
      {/* Background Pattern */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.light}20 0%, transparent 50%),            radial-gradient(circle at 80% 20%, ${theme.palette.secondary.light}20 0%, transparent 50%)`, opacity: 0.6 }} />

      {/* Floating Elements */}
      <Box sx={{ position: 'absolute', top: '10%', left: '10%', width: 100, height: 100, borderRadius: '50%', background: `radial-gradient(circle, ${theme.palette.primary.light}30 0%, transparent 70%)`, animation: 'float 6s ease-in-out infinite' }} />
      <Box sx={{ position: 'absolute', bottom: '20%', right: '15%', width: 80, height: 80, borderRadius: '50%', background: `radial-gradient(circle, ${theme.palette.secondary.light}30 0%, transparent 70%)`, animation: 'float 8s ease-in-out infinite 2s' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          {/* Chip */}
          <Chip label="Get Started" variant="filled" sx={{ mb: 4, fontWeight: 'bold', fontSize: '0.9rem', height: 32, px: 3, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />

          {/* Main Title */}
          <Typography variant="h2" fontWeight="bold" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, textShadow: '0 4px 12px rgba(0,0,0,0.1)', lineHeight: 1.2 }}>
            Launch Your Design System
          </Typography>

          {/* Subtitle */}
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9, maxWidth: 600, margin: '0 auto', lineHeight: 1.6, fontWeight: 300, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
            Transform your workflow with AI-powered tools that create, optimize, and deploy beautiful design systems automatically.
          </Typography>

          {/* Benefits Grid */}
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={4} flexWrap={'wrap'} my={4}>
            {benefits.map((benefit, index) => (
              <Box key={index}>
                {/* Responsive grid sizing */}
                <Box sx={{ textAlign: 'center', px: 1 }}>
                  {/* Added horizontal padding */}
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: 2, color: 'white', fontSize: 24 }}>{benefit.icon}</Box>
                  <Typography variant="body1" sx={{ opacity: 0.9, fontWeight: 500 }}>
                    {benefit.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* CTA Buttons */}
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', my: 4, px: { xs: 2, sm: 0 } }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<IoMdRocket />}
              sx={{ px: { xs: 4, sm: 5 }, py: 1.5, borderRadius: 3, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.1rem' }, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', color: theme.palette.primary.main, textTransform: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', transition: 'all 0.3s ease', minWidth: { xs: '200px', sm: 'auto' }, '&:hover': { background: 'rgba(255,255,255,1)', transform: 'translateY(-2px)', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' } }}
            >
              Start Free Trial
            </Button>

            <Button
              variant="outlined"
              size="large"
              endIcon={<IoMdDownload />}
              sx={{ px: { xs: 4, sm: 5 }, py: 1.5, borderRadius: 3, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.1rem' }, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '2px solid rgba(255,255,255,0.3)', color: 'white', textTransform: 'none', transition: 'all 0.3s ease', minWidth: { xs: '200px', sm: 'auto' }, '&:hover': { background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.5)', transform: 'translateY(-2px)' } }}
            >
              Export Theme
            </Button>
          </Box>

          {/* Footer Text */}
          <Typography variant="caption" sx={{ display: 'block', opacity: 0.7, fontWeight: 300, fontSize: { xs: '0.75rem', sm: '0.875rem' }, textAlign: 'center', lineHeight: 1.5 }}>
            🚀 No credit card required • 14-day free trial • Cancel anytime
          </Typography>
        </Box>
      </Container>

      {/* Global Animation */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </Box>
  );
}
