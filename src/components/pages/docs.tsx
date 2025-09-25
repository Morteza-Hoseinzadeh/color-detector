'use client';

import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import { Container, Typography, Box, Grid2, Card, CardContent, Chip, Button, Tabs, Tab, TextField, IconButton, Divider, List, ListItem, ListItemText, Alert, Breadcrumbs, Link, Paper } from '@mui/material';

import { FaSearch, FaCheck, FaGithub, FaArrowRight, FaDownload, FaNpm, FaReact, FaRocket } from 'react-icons/fa';
import { MdSecurity, MdSpeed, MdIntegrationInstructions, MdInstallDesktop } from 'react-icons/md';
import { IoCopy } from 'react-icons/io5';
import CustomSnackbar from '../UI/custom/CustomSnackbar';
import { SiTypescript } from 'react-icons/si';

// Your components data
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

const quickStartCode = `// 1. Install the package
npm install @chromaUI/design-system

// 2. Import and use components
import { Button, Container, Grid } from '@chromaUI/design-system';

function App() {
  return (
    <Container>
      <Button variant="primary">Get Started</Button>
      <Grid container spacing={2}>
        <Grid item xs={6}>Content</Grid>
        <Grid item xs={6}>Content</Grid>
      </Grid>
    </Container>
  );
}`;

export default function ComponentDocsPage() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarVariant, setSnackbarVariant] = useState<'success' | 'warning' | 'error' | 'info'>('success');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setSnackbarOpen(true);
      setSnackbarVariant('success');
      setSnackbarMsg('Copied to clipboard!');
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
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

  const filteredComponents = components.filter((category) => category.items.some((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box sx={{ py: 8, background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ mb: 3 }}>
            <Link color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit" href="/docs">
              Documentation
            </Link>
            <Typography color="text.primary">Components</Typography>
          </Breadcrumbs>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h1" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              ChromaUI Components
            </Typography>
            <Typography variant="h6" color="text.primary" sx={{ maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
              Beautiful, accessible UI components built with React and Material-UI. Start building modern web applications faster than ever.
            </Typography>
          </Box>

          {/* Installation Commands */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" fontWeight="600" gutterBottom sx={{ textAlign: 'center' }}>
              Get Started in Seconds
            </Typography>
            <Grid2 container spacing={2}>
              {installCommands.map((cmd, index) => {
                const gradient = index === 0 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : index === 1 ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' : index === 2 ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' : 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';

                return (
                  <Grid2 key={index} size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' : 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)',
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 2,
                        p: 2,
                        transition: 'all 0.3s ease-in-out',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': { transform: 'translateY(-2px)', borderColor: 'transparent', background: theme.palette.mode === 'dark' ? `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%), ${gradient}20` : `linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.02) 100%), ${gradient}10`, boxShadow: `0 8px 30px ${gradient}30` },
                        '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: gradient, transition: 'all 0.3s ease-in-out' },
                        '&:hover::before': { height: '3px', background: gradient, boxShadow: `0 0 20px ${gradient}50` },
                      }}
                    >
                      <Typography sx={{ mr: 2, fontSize: '1.5rem', filter: 'grayscale(0.3)', transition: 'all 0.3s ease-in-out', '&:hover': { filter: 'grayscale(0)', transform: 'scale(1.1)' } }}>{cmd.icon}</Typography>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', mb: 0.5, textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px', transition: 'all 0.3s ease-in-out' }}>
                          {cmd.packageManager}
                        </Typography>
                        <Typography variant="body1" fontFamily="monospace" sx={{ wordBreak: 'break-all', background: theme.palette.mode === 'dark' ? 'linear-gradient(45deg, #fff 30%, #aaa 100%)' : 'linear-gradient(45deg, #000 30%, #444 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 600, transition: 'all 0.3s ease-in-out' }}>
                          {cmd.command}
                        </Typography>
                      </Box>
                      <IconButton onClick={() => copyToClipboard(cmd.command)} sx={{ color: copiedCode === cmd.command ? theme.palette.success.main : theme.palette.text.secondary, transition: 'all 0.3s ease-in-out', background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', '&:hover': { background: gradient, color: 'white', transform: 'scale(1.1)' } }}>
                        {copiedCode === cmd.command ? <FaCheck /> : <IoCopy />}
                      </IconButton>
                    </Box>
                  </Grid2>
                );
              })}
            </Grid2>
          </Box>

          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', borderRadius: 3, p: 3, background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)' : 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)', border: `1px solid ${theme.palette.divider}`, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }, '&:hover': { transform: 'translateY(-4px)', transition: 'all 0.3s ease-in-out', boxShadow: `0 12px 40px ${theme.palette.primary.main}15` } }}>
                <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '50%', p: 2, mb: 2, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px' }}>
                  <FaReact size={36} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ mt: 1, fontWeight: 600 }}>
                  Built with React
                </Typography>
                <Typography color="text.primary">TypeScript-ready components</Typography>
              </Card>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', borderRadius: 3, p: 3, background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.1) 100%)' : 'linear-gradient(135deg, rgba(240, 147, 251, 0.05) 0%, rgba(245, 87, 108, 0.05) 100%)', border: `1px solid ${theme.palette.divider}`, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }, '&:hover': { transform: 'translateY(-4px)', transition: 'all 0.3s ease-in-out', boxShadow: `0 12px 40px ${theme.palette.secondary.main}15` } }}>
                <Box sx={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '50%', p: 2, mb: 2, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px' }}>
                  <MdInstallDesktop size={36} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ mt: 1, fontWeight: 600 }}>
                  Easy Installation
                </Typography>
                <Typography color="text.primary">Install via npm, yarn, pnpm, or bun</Typography>
              </Card>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', borderRadius: 3, p: 3, background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)' : 'linear-gradient(135deg, rgba(79, 172, 254, 0.05) 0%, rgba(0, 242, 254, 0.05) 100%)', border: `1px solid ${theme.palette.divider}`, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }, '&:hover': { transform: 'translateY(-4px)', transition: 'all 0.3s ease-in-out', boxShadow: `0 12px 40px #00f2fe15` } }}>
                <Box sx={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '50%', p: 2, mb: 2, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px' }}>
                  <MdSpeed size={36} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ mt: 1, fontWeight: 600 }}>
                  Fully Accessible
                </Typography>
                <Typography color="text.primary">WCAG compliant</Typography>
              </Card>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Quick Start Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', display: 'inline-block' }}>
            Quick Start
          </Typography>
          <Typography color="text.primary" sx={{ mb: 4 }}>
            Get started in minutes with our component library.
          </Typography>

          <Card sx={{ background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' : 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)', border: `1px solid ${theme.palette.divider}`, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` } }}>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}`, p: 3, background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)' }}>
                <Typography variant="h6" color="text.primary" fontWeight="600" sx={{ display: 'flex', alignItems: 'center', gap: 1, background: `linear-gradient(135deg, ${theme.palette.primary.main}30, ${theme.palette.secondary.main}30)`, backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>
                  <FaRocket size={18} />
                  Installation & Basic Usage
                </Typography>
              </Box>
              <Box sx={{ p: 3 }}>
                <Box sx={{ background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', border: `1px solid ${theme.palette.divider}`, borderRadius: 3, p: 3, position: 'relative', fontFamily: 'monospace', fontSize: '0.9rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` } }}>
                  <IconButton sx={{ position: 'absolute', top: 8, right: 8, background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', transition: 'all 0.3s ease', '&:hover': { background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, color: 'white', transform: 'scale(1.1)' } }} onClick={() => copyToClipboard(quickStartCode)}>
                    {copiedCode === quickStartCode ? <FaCheck /> : <IoCopy />}
                  </IconButton>

                  <Box sx={{ position: 'relative', pl: 2, '& pre': { margin: 0, whiteSpace: 'pre-wrap', background: 'transparent !important', color: theme.palette.text.primary } }}>
                    <pre style={{ margin: 0, padding: 0, fontSize: '0.9rem', background: 'transparent' }}>{quickStartCode}</pre>
                  </Box>
                </Box>

                {/* Additional Info */}
                <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Chip icon={<FaReact />} label="React 18+ Supported" variant="outlined" sx={{ px: '12px', background: theme.palette.mode === 'dark' ? 'rgba(97, 218, 251, 0.2)' : 'rgba(97, 218, 251, 0.5)', borderColor: 'rgba(97, 218, 251, 0.3)' }} />
                  <Chip icon={<SiTypescript />} label="TypeScript Ready" variant="outlined" sx={{ px: '12px', background: theme.palette.mode === 'dark' ? 'rgba(49, 120, 198, 0.2)' : 'rgba(49, 120, 198, 0.5)', borderColor: 'rgba(49, 120, 198, 0.3)' }} />
                  <Chip label="Zero Dependencies" variant="outlined" sx={{ px: '12px', background: theme.palette.mode === 'dark' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(76, 175, 80, 0.5)', borderColor: 'rgba(76, 175, 80, 0.3)' }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Components Grid */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h3" fontWeight="bold">
              Components
            </Typography>
          </Box>

          <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
            <Tab sx={{ color: 'text.primary' }} label="All Components" />
            <Tab sx={{ color: 'text.primary' }} label="Layout" />
            <Tab sx={{ color: 'text.primary' }} label="Navigation" />
            <Tab sx={{ color: 'text.primary' }} label="Inputs" />
            <Tab sx={{ color: 'text.primary' }} label="Data Display" />
            <Tab sx={{ color: 'text.primary' }} label="Feedback" />
            <Tab sx={{ color: 'text.primary' }} label="Surfaces" />
          </Tabs>

          <Grid2 container spacing={3}>
            {filteredComponents.map((category, index) => (
              <Grid2 key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                <Card sx={{ height: '100%', background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}`, borderRadius: 3, boxShadow: `0 8px 32px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.1)'}`, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', overflow: 'hidden', '&:hover': { transform: 'translateY(-8px)', boxShadow: `0 20px 40px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.15)'}` }, '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: category.gradient } }}>
                  {/* Category Header with Gradient */}
                  <Box sx={{ background: category.gradient, color: 'white', p: 3, position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="h2" sx={{ opacity: 0.9 }}>
                        {category.icon}
                      </Typography>
                      <Box>
                        <Typography variant="h5" fontWeight="600">
                          {category.category}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {category.items.length} components
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Component List */}
                  <List sx={{ p: 0 }}>
                    {category.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} sx={{ borderBottom: itemIndex < category.items.length - 1 ? `1px solid ${theme.palette.divider}` : 'none', '&:hover': { background: theme.palette.action.hover } }}>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Typography variant="subtitle1" fontWeight="500">
                                {item.name}
                              </Typography>
                              <Chip label={item.status} size="small" color={getStatusColor(item.status) as any} sx={{ fontWeight: '600', border: `1px solid ${item.status === 'Comming Soon!' ? theme.palette.success.main : item.status === 'beta' ? theme.palette.warning.main : theme.palette.error.main}30` }} />
                            </Box>
                          }
                          secondary={item.description}
                          secondaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* View All Button */}
                  <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Button fullWidth variant="outlined" onClick={handleShowCommingSoonSnackbar} endIcon={<FaArrowRight />} sx={{ mt: 3, py: 1.5, background: `linear-gradient(45deg, transparent, ${theme.palette.background.default})`, border: `1px solid ${theme.palette.divider}`, color: 'text.primary', fontWeight: '600', borderRadius: 3, transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)', '&:hover': { background: category.gradient, borderColor: 'transparent', transform: 'translateY(-2px)', boxShadow: `0 8px 25px ${category.gradient.split('0%')[0]}40` } }}>
                      View all {category.items.length} components
                    </Button>
                  </Box>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Why Choose ChromaUI?
          </Typography>

          <Grid2 container spacing={4} sx={{ mt: 2 }}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)' : 'linear-gradient(135deg, rgba(102, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 100%)',
                  border: `1px solid ${theme.palette.divider}`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)', borderColor: 'transparent', background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)' : 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)', boxShadow: '0 12px 40px rgba(102, 126, 234, 0.2)' },
                  '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', transition: 'all 0.3s ease' },
                  '&:hover::before': { height: '4px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 0 20px rgba(102, 126, 234, 0.4)' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: 3, p: 1.5, color: 'white', transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.1)', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)' } }}>
                    <MdSpeed size={24} />
                  </Box>
                  <Typography variant="h6" fontWeight="600" sx={{ transition: 'all 0.3s ease' }}>
                    High Performance
                  </Typography>
                </Box>
                <Typography color="text.secondary" sx={{ transition: 'all 0.3s ease' }}>
                  Optimized components with minimal bundle size. Tree-shakable and fast loading.
                </Typography>
              </Card>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(240, 147, 251, 0.05) 0%, rgba(245, 87, 108, 0.05) 100%)' : 'linear-gradient(135deg, rgba(240, 147, 251, 0.02) 0%, rgba(245, 87, 108, 0.02) 100%)',
                  border: `1px solid ${theme.palette.divider}`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)', borderColor: 'transparent', background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.1) 100%)' : 'linear-gradient(135deg, rgba(240, 147, 251, 0.05) 0%, rgba(245, 87, 108, 0.05) 100%)', boxShadow: '0 12px 40px rgba(240, 147, 251, 0.2)' },
                  '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', transition: 'all 0.3s ease' },
                  '&:hover::before': { height: '4px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', boxShadow: '0 0 20px rgba(240, 147, 251, 0.4)' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: 3, p: 1.5, color: 'white', transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.1)', boxShadow: '0 4px 15px rgba(240, 147, 251, 0.4)' } }}>
                    <MdSecurity size={24} />
                  </Box>
                  <Typography variant="h6" fontWeight="600" sx={{ transition: 'all 0.3s ease' }}>
                    Accessibility First
                  </Typography>
                </Box>
                <Typography color="text.secondary" sx={{ transition: 'all 0.3s ease' }}>
                  WCAG 2.1 compliant with full keyboard navigation and screen reader support.
                </Typography>
              </Card>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(79, 172, 254, 0.05) 0%, rgba(0, 242, 254, 0.05) 100%)' : 'linear-gradient(135deg, rgba(79, 172, 254, 0.02) 0%, rgba(0, 242, 254, 0.02) 100%)',
                  border: `1px solid ${theme.palette.divider}`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)', borderColor: 'transparent', background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)' : 'linear-gradient(135deg, rgba(79, 172, 254, 0.05) 0%, rgba(0, 242, 254, 0.05) 100%)', boxShadow: '0 12px 40px rgba(79, 172, 254, 0.2)' },
                  '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', transition: 'all 0.3s ease' },
                  '&:hover::before': { height: '4px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', boxShadow: '0 0 20px rgba(79, 172, 254, 0.4)' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: 3, p: 1.5, color: 'white', transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.1)', boxShadow: '0 4px 15px rgba(79, 172, 254, 0.4)' } }}>
                    <MdIntegrationInstructions size={24} />
                  </Box>
                  <Typography variant="h6" fontWeight="600" sx={{ transition: 'all 0.3s ease' }}>
                    Easy Customization
                  </Typography>
                </Box>
                <Typography color="text.secondary" sx={{ transition: 'all 0.3s ease' }}>
                  Themeable components with CSS variables and full design token support.
                </Typography>
              </Card>
            </Grid2>
          </Grid2>
        </Box>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Card sx={{ borderRadius: 3, background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`, border: `1px solid ${theme.palette.divider}`, p: 6, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `linear-gradient(135deg,     ${theme.palette.primary.main}05 0%,     ${theme.palette.secondary.main}05 50%,     ${theme.palette.primary.main}10 100%)`, zIndex: 0 }, '&::after': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` } }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, borderRadius: '50%', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'white', boxShadow: `0 8px 32px ${theme.palette.primary.main}30` }}>
                <FaNpm size={48} />
              </Box>

              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 2 }}>
                Ready to Start Building?
              </Typography>

              <Typography color="text.primary " sx={{ mb: 4, maxWidth: 500, margin: '0 auto', fontSize: '1.1rem' }}>
                Install ChromaUI today and accelerate your development workflow with beautiful, accessible components.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', my: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<FaDownload />}
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    padding: '12px 48px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    borderRadius: 3,
                    boxShadow: `0 4px 20px 0 ${theme.palette.primary.main}30`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': { content: '""', position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`, transition: 'left 0.5s' },
                    '&:hover': { transform: 'translateY(-3px)', boxShadow: `0 8px 30px 0 ${theme.palette.primary.main}50`, '&::before': { left: '100%' } },
                    '&:active': { transform: 'translateY(-1px)' },
                  }}
                  onClick={() => copyToClipboard('npm install @chromaUI/design-system')}
                >
                  Install via npm
                </Button>

                <Button variant="outlined" size="large" startIcon={<FaGithub />} sx={{ padding: '12px 48px', fontSize: '1rem', fontWeight: '700', borderRadius: 3, boxShadow: `0 4px 20px 0 ${theme.palette.primary.main}30`, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', overflow: 'hidden' }}>
                  GitHub Repository
                </Button>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 2, opacity: 0.8 }}>
                Also available via yarn, pnpm, and bun
              </Typography>
            </Box>
          </Card>
        </Box>

        {/* Custom snackbar component */}
        <CustomSnackbar variant={snackbarVariant} open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
          {snackbarMsg}
        </CustomSnackbar>
      </Container>
    </Box>
  );
}
