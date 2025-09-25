'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, Drawer, IconButton, Container } from '@mui/material';
import { useTheme } from '@mui/material';
import { useThemeMode } from '@/utils/hooks/useThemeMode';

// Icons
import { IoMenu, IoClose, IoColorPalette, IoMoon, IoSunny } from 'react-icons/io5';
import { PiPaintBrushBroad } from 'react-icons/pi';

export default function Header() {
  const theme = useTheme();

  const { toggleTheme, isDarkMode } = useThemeMode();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: 'features' },
    { label: 'Components', href: 'components' },
    { label: 'Docs', href: 'docs' },
    { label: 'Templates', href: 'templates' },
    { label: 'Theming', href: 'theming' },
    { label: 'Examples', href: 'examples' },
    { label: 'Pricing', href: 'pricing' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box sx={styles.headerWrapper}>
        <Container maxWidth="xl">
          <Box sx={styles.header}>
            {/* Logo */}
            <Box sx={styles.logoSection}>
              <Box sx={styles.logoIcon}>
                <PiPaintBrushBroad size={26} />
              </Box>
              <Typography variant="h5" sx={styles.logoText}>
                Chroma<span style={styles.logoAccent}>UI</span>
              </Typography>
            </Box>

            {/* Navigation */}
            <Box sx={styles.navSection}>
              {navItems.map((item) => (
                <Typography key={item.label} component="a" href={item.href} sx={styles.navLink}>
                  {item.label}
                </Typography>
              ))}
            </Box>

            {/* Actions */}
            <Box sx={styles.actionsSection}>
              <IconButton onClick={toggleTheme} sx={styles.themeButton} aria-label="Toggle theme">
                {isDarkMode ? <IoSunny size={18} /> : <IoMoon size={18} />}
              </IconButton>

              <Box sx={styles.verticalDivider} />

              <Button variant="contained" sx={styles.ctaButton}>
                <IoColorPalette size={18} style={{ marginRight: '8px' }} />
                Start Creating
              </Button>

              <IconButton sx={styles.menuButton} onClick={handleDrawerToggle} aria-label="Open menu">
                <IoMenu size={22} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} sx={styles.drawer}>
        <Box sx={styles.drawerContent}>
          <Box sx={styles.drawerHeader}>
            <Box sx={styles.logoSection}>
              <Box sx={styles.logoIcon}>
                <PiPaintBrushBroad size={26} />
              </Box>
              <Typography variant="h5" sx={styles.logoText}>
                Chroma<span style={styles.logoAccent}>UI</span>
              </Typography>
            </Box>
            <IconButton onClick={handleDrawerToggle} sx={styles.closeButton}>
              <IoClose size={22} />
            </IconButton>
          </Box>

          <Box sx={styles.mobileNav}>
            {navItems.map((item) => (
              <Button key={item.label} href={item.href} fullWidth sx={styles.mobileNavLink} onClick={handleDrawerToggle}>
                {item.label}
              </Button>
            ))}

            <Button variant="contained" fullWidth sx={styles.mobileCtaButton} startIcon={<IoColorPalette size={18} />}>
              Start Creating
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

const styles = {
  headerWrapper: {
    background: 'rgba(255, 255, 255, 0)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    webkitBackdropFilter: 'blur(9.1px)',
    position: 'sticky',
    top: 0,
    zIndex: 1100,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: { xs: 'space-between', xl: 'space-around' },
    padding: '1rem 0',
    height: '70px',
  },

  // Logo Section
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 42,
    height: 42,
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
  },
  logoText: {
    fontWeight: 700,
    color: 'text.primary',
    fontSize: '1.5rem',
    letterSpacing: '-0.5px',
  },
  logoAccent: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },

  // Navigation Section
  navSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',

    '@media (max-width: 1280px)': {
      display: 'none',
    },
  },
  navLink: {
    color: 'text.secondary',
    fontWeight: 500,
    fontSize: '0.95rem',
    textDecoration: 'none',
    padding: '0.5rem 0',
    position: 'relative',
    transition: 'all 0.2s ease',
    cursor: 'pointer',

    '&:hover': {
      color: 'text.primary',
      transform: 'translateY(-1px)',
    },
  },

  // Actions Section
  actionsSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  themeButton: {
    color: 'text.secondary',
    padding: '0.5rem',
    borderRadius: '8px',
    transition: 'all 0.2s ease',

    '&:hover': {
      color: 'text.primary',
      backgroundColor: 'action.hover',
      transform: 'scale(1.1)',
    },
  },
  verticalDivider: {
    width: '1px',
    height: '24px',
    backgroundColor: 'divider',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontWeight: 600,
    textTransform: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '10px',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 10px rgba(102, 126, 234, 0.3)',

    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
    },

    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  menuButton: {
    display: 'none',
    color: 'text.primary',
    padding: '0.5rem',

    '@media (max-width: 1280px)': {
      display: 'flex',
    },
  },

  // Mobile Drawer
  drawer: {
    display: { xs: 'block', lg: 'none' },
    '& .MuiDrawer-paper': {
      width: 300,
      backgroundColor: 'background.default',
      border: 'none',
      boxShadow: '0 0 50px rgba(0,0,0,0.1)',
    },
  },
  drawerContent: {
    padding: '1.25rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid',
    borderColor: 'divider',
  },
  closeButton: {
    color: 'text.secondary',
    padding: '0.5rem',
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    flex: 1,
  },
  mobileNavLink: {
    justifyContent: 'flex-start',
    color: 'text.primary',
    fontWeight: 500,
    textTransform: 'none',
    padding: '0.5rem',
    borderRadius: '8px',
    fontSize: '1rem',

    '&:hover': {
      backgroundColor: 'action.hover',
    },
  },
  mobileCtaButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontWeight: 600,
    textTransform: 'none',
    padding: '1rem',
    borderRadius: '10px',
    marginTop: '1rem',

    '&:hover': {
      background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
    },
  },
};
