'use client';

import React from 'react';
import { Container, Typography, Box, Grid2, Card, CardContent, Button, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MdCloudUpload, MdPalette, MdTextFields, MdBorderAll, MdAutoAwesome, MdViewInAr, MdIntegrationInstructions, MdFileDownload } from 'react-icons/md';
import { BsShadows } from 'react-icons/bs';

const features = [
  {
    icon: <MdCloudUpload size={40} />,
    title: 'Easy Style Upload',
    description: "Upload your website's color palette, fonts, shadows, and border-radius through intuitive interfaces",
    items: ['Drag & drop upload', 'JSON import/export', 'Image color extraction', 'CSS variable detection'],
    status: 'live',
    cta: 'Upload Styles',
  },
  {
    icon: <MdPalette size={40} />,
    title: 'Color Management',
    description: 'Complete color system management with contrast checking, palette generation, and accessibility tools',
    items: ['Color palette organizer', 'Contrast ratio checker', 'Accessibility scores', 'Dark/light mode variants'],
    status: 'live',
    cta: 'Manage Colors',
  },
  {
    icon: <MdTextFields size={40} />,
    title: 'Typography Scale',
    description: 'Define and manage font families, sizes, weights, line heights, and responsive typography scales',
    items: ['Font family manager', 'Type scale generator', 'Google Fonts integration', 'Responsive text sizes'],
    status: 'live',
    cta: 'Setup Typography',
  },
  {
    icon: <BsShadows size={40} />,
    title: 'Shadow System Builder',
    description: 'Create consistent shadow elevations with visual previews and CSS code generation',
    items: ['Shadow layer builder', 'Visual elevation preview', 'CSS box-shadow generator', 'Material Design compatible'],
    status: 'beta',
    cta: 'Build Shadows',
  },
  {
    icon: <MdBorderAll size={40} />,
    title: 'Border Radius Scale',
    description: 'Define consistent border radius values for buttons, cards, inputs, and other components',
    items: ['Radius scale system', 'Component-specific values', 'Pixel/rem/em support', 'Visual preview'],
    status: 'live',
    cta: 'Configure Radius',
  },
  {
    icon: <MdAutoAwesome size={40} />,
    title: 'Smart Suggestions',
    description: 'AI-powered suggestions for improving your design system based on best practices',
    items: ['Color harmony suggestions', 'Typography scale recommendations', 'Accessibility improvements', 'Consistency checks'],
    status: 'beta',
    cta: 'Get Suggestions',
  },
  {
    icon: <MdViewInAr size={40} />,
    title: 'Component Preview',
    description: 'Visual preview of how your design tokens apply to real components in real-time',
    items: ['Live component preview', 'Interactive playground', 'Multiple theme testing', 'Responsive testing'],
    status: 'live',
    cta: 'Preview Components',
  },
  {
    icon: <MdIntegrationInstructions size={40} />,
    title: 'Framework Integration',
    description: 'Export your design system for popular frameworks like React, Vue, Angular, and more',
    items: ['React component export', 'Vue composition API', 'Angular modules', 'Web Components'],
    status: 'live',
    cta: 'View Integrations',
  },
  {
    icon: <MdFileDownload size={40} />,
    title: 'Multi-Format Export',
    description: 'Export your design system as CSS variables, SCSS, JSON, TypeScript, or design tool formats',
    items: ['CSS custom properties', 'SCSS variables & mixins', 'JSON tokens', 'Figma Sync plugin'],
    status: 'coming soon',
    cta: 'Export System',
  },
];

export default function FeaturesSection() {
  const theme = useTheme();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'success';
      case 'beta':
        return 'warning';
      case 'coming soon':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <Box id="features" sx={{ py: 10, background: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 2 }}>
            Powerful Design System Features
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, margin: '0 auto', lineHeight: 1.6 }}>
            Everything you need to manage, maintain, and scale your design system. Upload your styles, preview components, and export ready-to-use code.
          </Typography>
        </Box>

        <Grid2 container spacing={4}>
          {features.map((feature, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card sx={{ height: '100%', background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}`, borderRadius: 3, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', overflow: 'hidden', '&:hover': { transform: 'translateY(-8px)', boxShadow: `0 20px 40px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`, borderColor: theme.palette.primary.main } }}>
                {/* Status Ribbon */}
                <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                  <Chip label={feature.status} size="small" color={getStatusColor(feature.status) as any} variant="filled" sx={{ fontWeight: 600 }} />
                </Box>

                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Icon */}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`, borderRadius: 3, mb: 3, color: theme.palette.primary.main }}>{feature.icon}</Box>

                  {/* Content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" fontWeight="600" gutterBottom>
                      {feature.title}
                    </Typography>

                    <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>

                    {/* Feature Items */}
                    <Box component="ul" sx={{ mb: 3, pl: 2, '& li': { color: theme.palette.text.secondary, mb: 1, fontSize: '0.9rem', position: 'relative', '&::before': { content: '"▸"', color: theme.palette.primary.main, marginRight: 1, fontWeight: 'bold' } } }}>
                      {feature.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </Box>
                  </Box>

                  {/* CTA Button */}
                  <Button variant={feature.status === 'coming soon' ? 'outlined' : 'contained'} fullWidth sx={{ background: feature.status !== 'coming soon' ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` : 'transparent', mt: 'auto', py: 1.5, fontWeight: 600, borderRadius: 2, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 8px 20px ${theme.palette.primary.main}30` } }} disabled={feature.status === 'coming soon'}>
                    {feature.cta}
                    {feature.status === 'coming soon' && ' (Soon)'}
                  </Button>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h5" fontWeight="600" gutterBottom>
            Ready to manage your design system?
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 600, margin: '0 auto' }}>
            Join thousands of developers who use our platform to maintain consistent, scalable design systems.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, px: 4, py: 1.5, fontSize: '1.1rem', fontWeight: '600', borderRadius: 2 }}>
              Start Free Trial
            </Button>
            <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem', fontWeight: '600', borderRadius: 2 }}>
              View Live Demo
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
