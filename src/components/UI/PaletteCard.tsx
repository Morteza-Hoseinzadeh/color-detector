import React from 'react';
import { Box, IconButton, Tooltip, Typography, Chip } from '@mui/material';
import { Grid2 } from '@mui/material';
import { CiExport } from 'react-icons/ci';
import { IoCopy } from 'react-icons/io5';

export default function PaletteCard({ isActive, showPreview, setShowPreview, colorPreview, setColorPreview }: any) {
  // Mock data for different design system categories
  const colorPalette = [
    // Primary Blues
    { name: 'Blue 50', value: '#e3f2fd', variable: '--blue-50' },
    { name: 'Blue 100', value: '#bbdefb', variable: '--blue-100' },
    { name: 'Blue 200', value: '#90caf9', variable: '--blue-200' },
    { name: 'Blue 300', value: '#64b5f6', variable: '--blue-300' },
    { name: 'Blue 400', value: '#42a5f5', variable: '--blue-400' },
    { name: 'Blue 500 (Primary Main)', value: '#2196f3', variable: '--blue-500' },
    { name: 'Blue 600', value: '#1e88e5', variable: '--blue-600' },
    { name: 'Blue 700 (Primary Dark)', value: '#1976d2', variable: '--blue-700' },
    { name: 'Blue 800', value: '#1565c0', variable: '--blue-800' },
    { name: 'Blue 900', value: '#0d47a1', variable: '--blue-900' },

    // Accent / Variations
    { name: 'Sky Blue', value: '#87ceeb', variable: '--sky-blue' },
    { name: 'Deep Sky Blue', value: '#00bfff', variable: '--deep-sky-blue' },
    { name: 'Dodger Blue', value: '#1e90ff', variable: '--dodger-blue' },
    { name: 'Royal Blue', value: '#4169e1', variable: '--royal-blue' },
    { name: 'Navy', value: '#000080', variable: '--navy' },
  ];

  const shadows = [
    { name: 'Small', value: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', variable: '--shadow-sm' },
    { name: 'Medium', value: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)', variable: '--shadow-md' },
    { name: 'Large', value: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)', variable: '--shadow-lg' },
    { name: 'X-Large', value: '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)', variable: '--shadow-xl' },
  ];

  const typography = [
    { name: 'Heading 1', family: 'SFPro', weight: '700', size: '2.5rem', variable: '--font-h1' },
    { name: 'Heading 2', family: 'SFPro', weight: '600', size: '2rem', variable: '--font-h2' },
    { name: 'Heading 3', family: 'SFPro', weight: '600', size: '1.5rem', variable: '--font-h3' },
    { name: 'Body', family: 'SFPro', weight: '400', size: '1rem', variable: '--font-body' },
    { name: 'Caption', family: 'SFPro', weight: '300', size: '0.875rem', variable: '--font-caption' },
  ];

  const spacing = [
    { name: 'XS', value: '0.25rem', variable: '--spacing-xs' },
    { name: 'SM', value: '0.5rem', variable: '--spacing-sm' },
    { name: 'MD', value: '1rem', variable: '--spacing-md' },
    { name: 'LG', value: '1.5rem', variable: '--spacing-lg' },
    { name: 'XL', value: '2rem', variable: '--spacing-xl' },
  ];

  const borderRadius = [
    { name: 'Small', value: '4px', variable: '--radius-sm' },
    { name: 'Medium', value: '8px', variable: '--radius-md' },
    { name: 'Large', value: '12px', variable: '--radius-lg' },
    { name: 'Circle', value: '50%', variable: '--radius-circle' },
  ];

  return (
    <Box sx={styles.container}>
      {/* Header */}
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Typography variant="h5" fontWeight={'bold'} color="primary.main" gutterBottom>
          {isActive}
        </Typography>
        <Tooltip title="Export as JSON" placement="left">
          <IconButton>
            <CiExport />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Colors Section */}
      <Box mt={4}>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Colors
        </Typography>
        <Grid2 container spacing={2}>
          {colorPalette.map((color, index) => (
            <Grid2 key={index} size={3} sx={{ ...styles.gridItem, cursor: 'pointer' }} onClick={() => setShowPreview(!showPreview)}>
              <Box sx={{ ...styles.colorBox, backgroundColor: color.value }} />
              <Typography variant="body2" sx={styles.itemName} fontWeight="bold">
                {color.name}
              </Typography>
              <Box mb={'8px'}>
                <Typography variant="caption" sx={styles.itemValue}>
                  {color.value}
                </Typography>
                <Tooltip title={`Click to copy ${color.value}`}>
                  <IconButton sx={{ color: 'text.secondary', ml: '4px' }}>
                    <IoCopy size={16} />
                  </IconButton>
                </Tooltip>
              </Box>
              <Chip label={color.variable} size="small" sx={styles.chip} />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Shadows Section */}
      <Box mt={4}>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Shadows
        </Typography>
        <Grid2 container spacing={2}>
          {shadows.map((shadow, index) => (
            <Grid2 key={index} size={6} sx={{ ...styles.gridItem, cursor: 'pointer' }}>
              <Box sx={{ ...styles.shadowBox, boxShadow: shadow.value }} />
              <Box mb={'8px'}>
                <Typography variant="caption" sx={styles.itemValue}>
                  {shadow.name}
                </Typography>
                <Tooltip title={`Click to copy '${shadow.value}'`}>
                  <IconButton sx={{ color: 'text.secondary', ml: '4px' }}>
                    <IoCopy size={16} />
                  </IconButton>
                </Tooltip>
              </Box>
              <Chip label={shadow.variable} size="small" sx={styles.chip} />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Typography Section */}
      <Box mt={4}>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Typography
        </Typography>
        <Grid2 container spacing={2}>
          {typography.map((font, index) => (
            <Grid2 key={index} size={6} sx={styles.gridItem}>
              <Typography variant={index === 0 ? 'h1' : index === 1 ? 'h2' : index === 2 ? 'h3' : 'body1'} sx={{ fontFamily: font.family, fontWeight: font.weight, fontSize: font.size, color: 'text.primary' }}>
                {font.name}
              </Typography>
              <Typography variant="caption" sx={styles.itemValue}>
                {font.family} • {font.weight} • {font.size}
              </Typography>
              <Chip label={font.variable} size="small" sx={styles.chip} />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Spacing Section */}
      <Box mt={4}>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Spacing
        </Typography>
        <Grid2 container spacing={2}>
          {spacing.map((space, index) => (
            <Grid2 key={index} size={2.4} sx={styles.gridItem}>
              <Box sx={{ ...styles.spaceBox, height: space.value }} />
              <Typography variant="body2" sx={styles.itemName} fontWeight="bold">
                {space.name}
              </Typography>
              <Box mb={'8px'}>
                <Typography variant="caption" sx={styles.itemValue}>
                  {space.value}
                </Typography>
                <Tooltip title={`Click to copy ${space.value}`}>
                  <IconButton sx={{ color: 'text.secondary', ml: '8px' }}>
                    <IoCopy size={16} />
                  </IconButton>
                </Tooltip>
              </Box>
              <Chip label={space.variable} size="small" sx={styles.chip} />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Border Radius Section */}
      <Box mt={4}>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Border Radius
        </Typography>
        <Grid2 container spacing={2}>
          {borderRadius.map((radius, index) => (
            <Grid2 key={index} size={3} sx={styles.gridItem}>
              <Box sx={{ ...styles.radiusBox, borderRadius: radius.value }} />
              <Typography variant="body2" sx={styles.itemName} fontWeight="bold">
                {radius.name}
              </Typography>
              <Box mb={'8px'}>
                <Typography variant="caption" sx={styles.itemValue}>
                  {radius.value}
                </Typography>
                <Tooltip title={`Click to copy ${radius.value}`}>
                  <IconButton sx={{ color: 'text.secondary', ml: '8px' }}>
                    <IoCopy size={16} />
                  </IconButton>
                </Tooltip>
              </Box>
              <Chip label={radius.variable} size="small" sx={styles.chip} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    width: '100%',
    minHeight: '200px',
    backgroundColor: 'background.paper',
    borderRadius: '16px',
    p: 3,
    overflow: 'auto',
    maxHeight: '85vh',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    p: 1,
  },
  colorBox: {
    boxShadow: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    width: '100%',
    height: '80px',
    borderRadius: '8px',
    marginBottom: '8px',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  shadowBox: {
    boxShadow: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    width: '100%',
    height: '60px',
    borderRadius: '8px',
    marginBottom: '8px',
    backgroundColor: 'white',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  spaceBox: {
    boxShadow: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    width: '100%',
    backgroundColor: '#e3f2fd',
    marginBottom: '8px',
  },
  radiusBox: {
    boxShadow: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    width: '60px',
    height: '60px',
    backgroundColor: '#1e90ff',
    marginBottom: '8px',
  },
  itemName: {
    color: 'text.primary',
    textAlign: 'center',
    mb: 0.5,
  },
  itemValue: {
    color: 'text.secondary',
    textAlign: 'center',
    mb: 1,
  },
  chip: {
    fontSize: '0.6rem',
    height: '20px',
    '& .MuiChip-label': {
      px: 1,
    },
  },
};
