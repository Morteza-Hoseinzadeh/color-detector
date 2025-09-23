'use client';

import React from 'react';
import { Box, Container, Grid2, Typography, Link, IconButton } from '@mui/material';
import { useTheme } from '@mui/material';

export default function Footer() {
  const theme = useTheme();

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Use Cases', href: '#usecases' },
        { name: 'Integrations', href: '#integrations' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Blog', href: '/blog' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Community', href: '/community' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Status', href: '/status' },
        { name: 'Contact Support', href: '/support' },
        { name: 'API Docs', href: '/api' },
      ],
    },
  ];

  return (
    <Box component="footer" sx={{ background: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#f8fafc', borderTop: `1px solid ${theme.palette.divider}`, pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={6}>
          {/* Brand Section */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              DesignSystem AI
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{ mb: 3, lineHeight: 1.6 }}>
              Build, manage, and deploy beautiful design systems with AI-powered tools. Transform your workflow and create consistent, accessible interfaces faster.
            </Typography>
            <Typography variant="body2" color="text.primary">
              © {currentYear} DesignSystem AI. All rights reserved.
            </Typography>
          </Grid2>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <Grid2 key={index} size={{ xs: 6, md: 2 }}>
              <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                {section.title}
              </Typography>
              <Box component="nav">
                {section.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link.href} color="text.secondary" variant="body2" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}>
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Grid2>
          ))}
        </Grid2>

        {/* Bottom Section */}
        <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, mt: 6, pt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.primary">
            Made with ❤️ for designers and developers worldwide
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="body2" color="text.primary">
              Follow us:
            </Typography>
            {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
              <Link key={social} href={`/${social.toLowerCase()}`} color="text.primary" variant="body2" sx={{ '&:hover': { color: theme.palette.primary.main } }}>
                {social}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
