import React, { useState } from 'react';
import { Box, Typography, Chip, IconButton, Tooltip, Grid2 } from '@mui/material';
import { IoCheckmarkCircle, IoClose, IoCopyOutline } from 'react-icons/io5';

export default function ColorsPreview({ colorPreview, setShowPreview }: any) {
  const [copiedColor, setCopiedColor] = useState(null);

  const colorConfig = {
    primary: '#1e90ff',
    shades: {
      50: '#e6f3ff',
      100: '#cce6ff',
      200: '#99ceff',
      300: '#66b5ff',
      400: '#339dff',
      500: '#1e90ff',
      600: '#0072e5',
      700: '#0055b3',
      800: '#003d80',
      900: '#00264d',
    },
    variants: {
      light: '#5eaaff',
      dark: '#187bcd',
      complementary: '#ff8c1e',
      analogous1: '#1effff',
      analogous2: '#1e2fff',
      triadic1: '#ff1e90',
      triadic2: '#90ff1e',
    },
  };

  const copyToClipboard = (colorValue: any, colorName: any) => {
    navigator.clipboard.writeText(colorValue);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const getContrastColor = (hexcolor: any) => {
    hexcolor = hexcolor.replace('#', '');
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#000000' : '#ffffff';
  };

  const ColorSwatch = ({ color, name, value, showName = true, showValue = true, size = 'medium' }: any) => {
    const contrastColor = getContrastColor(value);
    const dimensions = size === 'large' ? 120 : size === 'small' ? 60 : 80;

    return (
      <Box sx={styles.colorSwatch}>
        <Tooltip title={`Click to copy ${value}`}>
          <Box sx={{ ...styles.colorBox, width: dimensions, height: dimensions, backgroundColor: value, color: contrastColor, '&:hover': { transform: 'scale(1.05)', boxShadow: `0 4px 12px ${value}40` } }} onClick={() => copyToClipboard(value, name)}>
            {copiedColor === name && <IoCheckmarkCircle style={{ fontSize: 20, position: 'absolute', top: 8, right: 8 }} />}
            <IconButton size="small" sx={{ position: 'absolute', bottom: 8, right: 8, color: contrastColor, backgroundColor: 'rgba(0,0,0,0.1)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.2)' } }}>
              <IoCopyOutline style={{ fontSize: 16 }} />
            </IconButton>
          </Box>
        </Tooltip>
        {showName && (
          <Typography variant="body2" fontWeight="bold" sx={{ mt: 1 }}>
            {name}
          </Typography>
        )}
        {showValue && (
          <Typography variant="caption" color="text.secondary">
            {value}
          </Typography>
        )}
      </Box>
    );
  };

  return (
    <Box sx={styles.container}>
      {/* Primary Color */}
      <Box sx={styles.section}>
        <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={4}>
          <Typography variant="h6" gutterBottom>
            Primary Color
          </Typography>
          <IconButton onClick={() => setShowPreview(false)}>
            <IoClose />
          </IconButton>
        </Box>
        <ColorSwatch color="primary" name="Primary" value={colorConfig.primary} size="large" />
      </Box>

      {/* Color Shades */}
      <Box sx={styles.section}>
        <Typography variant="h6" gutterBottom>
          Color Shades
        </Typography>
        <Grid2 container spacing={2} sx={styles.gridContainer}>
          {Object.entries(colorConfig.shades).map(([shade, value]) => (
            <Grid2 size={{ xs: 6, sm: 4, md: 2.4 }} key={shade}>
              <ColorSwatch color={`shade-${shade}`} name={`Shade ${shade}`} value={value} size="small" />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Color Variants */}
      <Box sx={styles.section}>
        <Typography variant="h6" gutterBottom>
          Color Variants
        </Typography>
        <Grid2 container spacing={2} sx={styles.gridContainer}>
          {Object.entries(colorConfig.variants).map(([variant, value]) => (
            <Grid2 size={{ xs: 6, sm: 3 }} key={variant}>
              <ColorSwatch color={`variant-${variant}`} name={variant.charAt(0).toUpperCase() + variant.slice(1)} value={value} />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Usage Examples */}
      <Box sx={styles.section}>
        <Typography variant="h6" gutterBottom>
          Usage Examples
        </Typography>
        <Grid2 container spacing={3} sx={styles.gridContainer}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ ...styles.exampleBox, backgroundColor: colorConfig.primary }}>
              <Typography sx={{ color: getContrastColor(colorConfig.primary) }}>Primary</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ ...styles.exampleBox, border: `2px solid ${colorConfig.primary}` }}>
              <Typography color="primary">Primary Border</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={styles.exampleBox}>
              <Typography sx={{ color: colorConfig.primary }}>Primary Text</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ ...styles.exampleBox, backgroundColor: colorConfig.shades[100] }}>
              <Typography>Light Shade</Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      {/* CSS Variables */}
      <Box sx={styles.section}>
        <Typography variant="h6" gutterBottom>
          CSS Variables
        </Typography>
        <Box sx={styles.codeBlock}>
          <Typography variant="caption" component="pre" sx={styles.pre}>
            {`:root {\n  --color-primary: ${colorConfig.primary};\n  --color-primary-50: ${colorConfig.shades[50]};\n  --color-primary-100: ${colorConfig.shades[100]};\n  --color-primary-500: ${colorConfig.shades[500]};\n  --color-primary-900: ${colorConfig.shades[900]};\n}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    backgroundColor: 'background.paper',
    color: 'text.primary',
    p: 3,
    borderRadius: '16px',
    maxWidth: 1200,
    margin: '0 auto',
    overflow: 'auto', // Added overflow to main container
    maxHeight: '100vh', // Ensure it doesn't exceed viewport height
  },
  section: {
    mb: 4,
    color: 'text.primary',
    overflow: 'hidden', // Prevent content from overflowing sections
  },
  gridContainer: {
    overflow: 'visible', // Allow grid content to be visible
  },
  colorSwatch: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    overflow: 'hidden', // Prevent swatch content from overflowing
  },
  colorBox: {
    position: 'relative',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden', // Ensure content stays within the box
  },
  exampleBox: {
    p: 3,
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: 'background.paper',
    overflow: 'hidden', // Prevent content from overflowing example boxes
    minHeight: '80px', // Ensure consistent height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeBlock: {
    backgroundColor: 'background.paper',
    borderRadius: '8px',
    p: 2,
    overflow: 'auto', // Allow scrolling for code blocks
    maxHeight: '200px', // Limit height of code block
  },
  pre: {
    margin: 0,
    fontFamily: 'Monaco, monospace',
    lineHeight: 1.5,
    overflow: 'auto', // Allow scrolling within pre element
    whiteSpace: 'pre-wrap', // Wrap long lines
    wordWrap: 'break-word', // Break long words
  },
};
