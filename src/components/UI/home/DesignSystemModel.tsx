'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Grid2, Chip, Button } from '@mui/material';
import { useTheme } from '@mui/material';
import { IoMdColorPalette, IoMdRocket } from 'react-icons/io';
import { GiSparkles } from 'react-icons/gi';

export default function DesignSystemModel() {
  const theme = useTheme();

  const aiFeatures = ['AI-powered color palette generation', 'Automated accessibility compliance', 'Smart contrast ratio optimization', 'One-click deployment to web & mobile'];

  return (
    <Box sx={{ position: 'relative' }}>
      {/* AI Deployment Header */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Chip icon={<GiSparkles />} label="AI Powered" color="primary" variant="filled" sx={{ mb: 2, fontWeight: 'bold', fontSize: '0.9rem', height: 32, px: 2, background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` }} />
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 1 }}>
          Deploy Your Color Palette with AI
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Generate, optimize, and deploy perfect color systems automatically
        </Typography>
      </Box>

      {/* Interactive Card */}
      <Card sx={{ background: theme.palette.background.paper, borderRadius: 4, p: 3, boxShadow: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden', '&:hover': { transform: 'translateY(-4px)', boxShadow: theme.shadows[8] } }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, marginRight: 2 }}>
              <IoMdColorPalette style={{ color: 'white', fontSize: 20 }} />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                AI Color System
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Powered by machine learning
              </Typography>
            </Box>
          </Box>

          {/* AI Features List */}
          <Box sx={{ mb: 3 }}>
            {aiFeatures.map((feature, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <GiSparkles style={{ color: theme.palette.primary.main, fontSize: 16, marginRight: 2 }} />
                <Typography variant="body2" color="text.primary">
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Enhanced Color Preview */}
          <Grid2 container spacing={1} sx={{ mb: 3 }}>
            {[
              { color: theme.palette.primary.main, name: 'Primary AI' },
              { color: theme.palette.secondary.main, name: 'Secondary AI' },
              { color: theme.palette.success.main, name: 'Success AI' },
            ].map((item, index) => (
              <Grid2 key={index} size={4}>
                <Box sx={{ ...styles.cards, backgroundColor: item.color, '&:hover': { transform: 'scale(1.05)', boxShadow: `0 8px 24px ${item.color}30` }, '&:before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: `linear-gradient(45deg, transparent 30%, ${item.color}40 70%)`, opacity: 0, transition: 'opacity 0.3s ease' }, '&:hover:before': { opacity: 1 } }}>
                  <Typography variant="caption" sx={{ color: theme.palette.getContrastText(item.color), fontWeight: 'bold', textAlign: 'center', zIndex: 1 }}>
                    {item.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: theme.palette.getContrastText(item.color), fontSize: '0.7rem', zIndex: 1 }}>
                    {item.color}
                  </Typography>
                </Box>
              </Grid2>
            ))}
          </Grid2>

          {/* AI Deployment Button */}
          <Button
            variant="contained"
            fullWidth
            startIcon={<IoMdRocket />}
            endIcon={<GiSparkles />}
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
          >
            Deploy with AI Assistant
          </Button>

          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
            🚀 Generate and deploy in seconds with AI-powered optimization
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

const styles = {
  cards: {
    height: 80,
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  },
};
