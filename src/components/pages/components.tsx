'use client';

import React, { useState } from 'react';

// Mui imports
import { Container, Typography, Box, Grid2, Card, CardContent, Chip, Button, IconButton, Snackbar, Alert } from '@mui/material';

// Utils
import { useTheme } from '@mui/material/styles';

// Icons
import { FaCode, FaArrowRight, FaCheck } from 'react-icons/fa';
import { IoCopy } from 'react-icons/io5';

// Component
import CustomSnackbar from '../UI/custom/CustomSnackbar';

const components = [
  {
    category: 'Layout',
    icon: '📐',
    items: [
      { name: 'Container', description: 'Responsive layout container', status: 'Coming Soon!' },
      { name: 'Grid', description: 'Flexible grid system', status: 'Coming Soon!' },
      { name: 'Box', description: 'Layout and spacing component', status: 'Coming Soon!' },
      { name: 'Stack', description: 'Vertical/horizontal layouts', status: 'Coming Soon!' },
    ],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    category: 'Navigation',
    icon: '🧭',
    items: [
      { name: 'AppBar', description: 'Top navigation bar', status: 'Coming Soon!' },
      { name: 'Drawer', description: 'Side navigation panel', status: 'Coming Soon!' },
      { name: 'Tabs', description: 'Tabbed navigation', status: 'Coming Soon!' },
      { name: 'Breadcrumbs', description: 'Navigation path indicator', status: 'Coming Soon!' },
    ],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    category: 'Inputs',
    icon: '⌨️',
    items: [
      { name: 'TextField', description: 'Text input fields', status: 'Coming Soon!' },
      { name: 'Button', description: 'Action buttons', status: 'Coming Soon!' },
      { name: 'Select', description: 'Dropdown selection', status: 'Coming Soon!' },
      { name: 'Checkbox', description: 'Toggle selection', status: 'Coming Soon!' },
      { name: 'Radio', description: 'Single selection', status: 'Coming Soon!' },
      { name: 'Switch', description: 'Toggle switch', status: 'Coming Soon!' },
    ],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    category: 'Data Display',
    icon: '📊',
    items: [
      { name: 'Card', description: 'Content container', status: 'Coming Soon!' },
      { name: 'Table', description: 'Data table', status: 'Coming Soon!' },
      { name: 'List', description: 'Item lists', status: 'Coming Soon!' },
      { name: 'Badge', description: 'Status indicator', status: 'Coming Soon!' },
      { name: 'Chip', description: 'Compact element', status: 'Coming Soon!' },
    ],
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    category: 'Feedback',
    icon: '💬',
    items: [
      { name: 'Alert', description: 'Notification messages', status: 'Coming Soon!' },
      { name: 'Dialog', description: 'Modal windows', status: 'Coming Soon!' },
      { name: 'Snackbar', description: 'Temporary notifications', status: 'Coming Soon!' },
      { name: 'Progress', description: 'Loading indicators', status: 'Coming Soon!' },
    ],
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    category: 'Surfaces',
    icon: '🎴',
    items: [
      { name: 'Paper', description: 'Elevated container', status: 'Coming Soon!' },
      { name: 'Card', description: 'Content card', status: 'Coming Soon!' },
      { name: 'Accordion', description: 'Expandable content', status: 'Coming Soon!' },
    ],
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
];

const installCommands = [
  { packageManager: 'npm', command: 'npm install @chromaUI/design-system', icon: '📦' },
  { packageManager: 'yarn', command: 'yarn add @chromaUI/design-system', icon: '🐈' },
  { packageManager: 'pnpm', command: 'pnpm add @chromaUI/design-system', icon: '📎' },
  { packageManager: 'bun', command: 'bun add @chromaUI/design-system', icon: '🎯' },
];

export default function ComponentsSection() {
  const theme = useTheme();
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarVariant, setSnackbarVariant] = useState<'success' | 'warning' | 'error' | 'info'>('success');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable':
        return 'success';
      case 'Coming Soon!':
        return 'info';
      case 'beta':
        return 'warning';
      case 'alpha':
        return 'error';
      default:
        return 'default';
    }
  };

  const copyToClipboard = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      setSnackbarOpen(true);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleShowCommingSoonSnackbar = () => {
    setSnackbarOpen(true);
    setSnackbarVariant('info');
    setSnackbarMsg('Comming Soon!');
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box id="components" sx={{ py: 6, borderRadius: '16px', background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: `radial-gradient(circle at 30% 20%, ${theme.palette.primary.main}15 0%, transparent 50%)`, zIndex: 0 } }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 2 }}>
            Component Library
          </Typography>
          <Typography variant="h6" color="text.primary" sx={{ maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            Beautiful, accessible components with gradient styling and modern design patterns.
          </Typography>
        </Box>

        {/* Installation Section */}
        <Box sx={{ mb: 8 }}>
          <Card sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.secondary.main}08)`, border: `1px solid ${theme.palette.divider}`, borderRadius: 3, p: 4, mb: 4 }}>
            <Typography variant="h5" fontWeight="600" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
              Get Started in Seconds
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 4 }}>
              Install our design system package and start building immediately
            </Typography>

            <Grid2 container spacing={2}>
              {installCommands.map((cmd, index) => (
                <Grid2 key={index} size={{ xs: 12, md: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' : 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)', border: `1px solid ${theme.palette.divider}`, borderRadius: 2, p: 2, transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden', '&:hover': { transform: 'translateY(-2px)', borderColor: theme.palette.primary.main, boxShadow: `0 8px 30px ${theme.palette.primary.main}20` }, '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: index === 0 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : index === 1 ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' : index === 2 ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' : 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' } }}>
                    <Typography sx={{ mr: 2, fontSize: '1.5rem', filter: 'grayscale(0.3)' }}>{cmd.icon}</Typography>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', mb: 0.5, textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px' }}>
                        {cmd.packageManager}
                      </Typography>
                      <Typography variant="body1" fontFamily="monospace" sx={{ wordBreak: 'break-all', background: theme.palette.mode === 'dark' ? 'linear-gradient(45deg, #fff 30%, #aaa 100%)' : 'linear-gradient(45deg, #000 30%, #444 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 600 }}>
                        {cmd.command}
                      </Typography>
                    </Box>
                    <IconButton onClick={() => copyToClipboard(cmd.command)} sx={{ color: copiedCommand === cmd.command ? theme.palette.success.main : theme.palette.text.secondary, transition: 'all 0.3s ease', background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', '&:hover': { background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)', transform: 'scale(1.1)' } }}>
                      {copiedCommand === cmd.command ? <FaCheck /> : <IoCopy />}
                    </IconButton>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Card>
        </Box>

        <Grid2 container spacing={4}>
          {components.map((category, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card sx={{ height: '100%', background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}`, borderRadius: 3, boxShadow: `0 8px 32px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.1)'}`, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', overflow: 'hidden', '&:hover': { transform: 'translateY(-8px)', boxShadow: `0 20px 40px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.15)'}` }, '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: category.gradient } }}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Header with Icon and Category */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                    <Box sx={{ width: 60, height: 60, background: category.gradient, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'white', boxShadow: `0 4px 15px ${category.gradient.split('0%')[0]}40` }}>{category.icon}</Box>
                    <Typography variant="h5" fontWeight="700" sx={{ background: category.gradient, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                      {category.category}
                    </Typography>
                  </Box>

                  {/* Component List */}
                  <Box sx={{ flex: 1 }}>
                    {category.items.map((component, i) => (
                      <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', py: 2, borderBottom: i < category.items.length - 1 ? `1px solid ${theme.palette.divider}30` : 'none', transition: 'all 0.2s ease', '&:hover': { background: theme.palette.action.hover, borderRadius: 2, px: 1, mx: -1 } }}>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body1" fontWeight="600" sx={{ mb: 0.5 }}>
                            {component.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                            {component.description}
                          </Typography>
                        </Box>
                        <Chip label={component.status} size="small" color={getStatusColor(component.status) as any} sx={{ fontWeight: '600', border: `1px solid ${component.status === 'Comming Soon!' ? theme.palette.success.main : component.status === 'beta' ? theme.palette.warning.main : theme.palette.error.main}30` }} />
                      </Box>
                    ))}
                  </Box>

                  {/* View More Button */}
                  <Button fullWidth variant="outlined" onClick={handleShowCommingSoonSnackbar} endIcon={<FaArrowRight />} sx={{ mt: 3, py: 1.5, background: `linear-gradient(45deg, transparent, ${theme.palette.background.default})`, border: `1px solid ${theme.palette.divider}`, color: 'text.primary', fontWeight: '600', borderRadius: 2, transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)', '&:hover': { background: category.gradient, borderColor: 'transparent', transform: 'translateY(-2px)', boxShadow: `0 8px 25px ${category.gradient.split('0%')[0]}40` } }}>
                    View {category.category}
                  </Button>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Box sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`, border: `1px solid ${theme.palette.divider}`, borderRadius: 4, p: 5, maxWidth: 600, margin: '0 auto' }}>
            <Typography variant="h5" fontWeight="700" gutterBottom color="text.primary" sx={{ mb: 2 }}>
              Ready to explore all components?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Discover our complete collection of 50+ beautifully designed components.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button fullWidth variant="contained" size="large" startIcon={<FaCode />} sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, padding: '12px 48px', fontSize: '1rem', fontWeight: '700', borderRadius: 3, boxShadow: `0 4px 20px 0 ${theme.palette.primary.main}30`, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`, transition: 'left 0.5s' }, '&:hover': { transform: 'translateY(-3px)', boxShadow: `0 8px 30px 0 ${theme.palette.primary.main}50`, '&::before': { left: '100%' } }, '&:active': { transform: 'translateY(-1px)' } }}>
                View All Components
              </Button>
              <Button fullWidth variant="outlined" size="large" sx={{ borderColor: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, fontSize: '1rem', fontWeight: '700', borderRadius: 3, boxShadow: `0 4px 20px 0 ${theme.palette.primary.main}30`, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', overflow: 'hidden' }}>
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Custom snackbar component */}
        <CustomSnackbar variant={snackbarVariant} open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
          {snackbarMsg}
        </CustomSnackbar>
      </Container>
    </Box>
  );
}
