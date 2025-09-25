'use client';

import React from 'react';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { useThemeMode } from '@/utils/hooks/useThemeMode';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const { theme, isDarkMode } = useThemeMode();

  // Global styles for smooth transitions and better UX
  const globalStyles = {
    body: {
      transition: 'background-color 0.3s ease, color 0.3s ease',
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        background: theme.palette.background.paper,
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme.palette.primary.main,
        borderRadius: '4px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: theme.palette.primary.dark,
      },
    },
    'html, body': {
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      fontFamily: theme.typography.fontFamily,
    },
    '#__next': {
      minHeight: '100vh',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />

      {/* Add data attribute for CSS targeting based on theme */}
      <body data-theme={isDarkMode ? 'dark' : 'light'} data-mode="design-system" style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, minHeight: '100vh', transition: 'all 0.3s ease-in-out' }}>
        {/* Gradient background overlay */}
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: isDarkMode ? `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}15 0%, transparent 50%)` : `linear-gradient(135deg, ${theme.palette.primary.main}08 0%, ${theme.palette.secondary.main}08 100%)`, zIndex: 0, pointerEvents: 'none' }} />

        {/* Main content */}
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>{children}</main>

        {/* Theme transition overlay for smooth mode changes */}
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: theme.palette.background.default, opacity: 0, pointerEvents: 'none', zIndex: 9999, transition: 'opacity 0.3s ease-in-out' }} id="theme-transition-overlay" />
      </body>
    </ThemeProvider>
  );
};

export default RootLayout;
