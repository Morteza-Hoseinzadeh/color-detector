'use client';

import React, { useState } from 'react';

// Mui imports
import { Box, Grid2, Card, Typography, IconButton, Avatar, TextField, Button, Chip, Divider, Tabs, Tab } from '@mui/material';

// Utils
import { useTheme } from '@mui/material/styles';

// Icons - All from react-icons/io5
import { IoSearch, IoAdd, IoHeart, IoHeartOutline, IoChatbubble, IoBookmark, IoBookmarkOutline, IoShare, IoColorPalette, IoText, IoPerson, IoHome, IoCompass, IoSettings, IoMail, IoColorFilter, IoEllipse, IoAperture } from 'react-icons/io5';

// Custom components
import Header from '../UI/Header';
import Footer from '../UI/Footer';

// Mock data for themes
const mockThemes = [
  {
    id: 1,
    user: {
      name: 'Digikala Design',
      avatar: '🛒',
      username: '@digikala_design',
    },
    theme: {
      name: 'Digikala Red',
      colors: {
        primary: '#EF394E', // Digikala's signature red
        secondary: '#3C4B6C', // Digikala's dark blue
        background: '#F9F9F9', // Light background
      },
      typography: 'IRANSans',
      shadows: 'Material Design',
      gradients: ['#EF394E', '#FF6B7A'],
    },
    likes: 892,
    comments: 134,
    isLiked: true,
    isSaved: true,
  },
  {
    id: 2,
    user: {
      name: 'Snapp Team',
      avatar: '🚗',
      username: '@snapp_design',
    },
    theme: {
      name: 'Snapp Green',
      colors: {
        primary: '#00C569', // Snapp's green
        secondary: '#1A1A1A', // Dark gray
        background: '#FFFFFF', // White background
      },
      typography: 'IRANYekan',
      shadows: 'Soft Shadows',
      gradients: ['#00C569', '#00A85F'],
    },
    likes: 756,
    comments: 89,
    isLiked: false,
    isSaved: true,
  },
  {
    id: 3,
    user: {
      name: 'Tapsi UI',
      avatar: '🚕',
      username: '@tapsi_ui',
    },
    theme: {
      name: 'Tapsi Blue',
      colors: {
        primary: '#3A7BFA', // Tapsi's blue
        secondary: '#1E2A3A', // Dark blue
        background: '#F8FAFC', // Light blue background
      },
      typography: 'Vazir',
      shadows: 'Natural Shadows',
      gradients: ['#3A7BFA', '#5B8DEF'],
    },
    likes: 643,
    comments: 67,
    isLiked: true,
    isSaved: false,
  },
  {
    id: 4,
    user: {
      name: 'Alibaba Design',
      avatar: '📦',
      username: '@alibaba_design',
    },
    theme: {
      name: 'Alibaba Orange',
      colors: {
        primary: '#FF6A00', // Alibaba.ir orange
        secondary: '#333333', // Dark gray
        background: '#FFF5E6', // Light orange background
      },
      typography: 'Samim',
      shadows: 'Material Design',
      gradients: ['#FF6A00', '#FF8C33'],
    },
    likes: 534,
    comments: 45,
    isLiked: false,
    isSaved: true,
  },
  {
    id: 5,
    user: {
      name: 'Bamilo Style',
      avatar: '🛍️',
      username: '@bamilo_style',
    },
    theme: {
      name: 'Bamilo Purple',
      colors: {
        primary: '#8B5CF6', // Bamilo's purple
        secondary: '#4C1D95', // Dark purple
        background: '#F5F3FF', // Light purple background
      },
      typography: 'IRANSans',
      shadows: 'Soft Shadows',
      gradients: ['#8B5CF6', '#A78BFA'],
    },
    likes: 421,
    comments: 32,
    isLiked: true,
    isSaved: false,
  },
  {
    id: 6,
    user: {
      name: 'Divar Design',
      avatar: '🏠',
      username: '@divar_design',
    },
    theme: {
      name: 'Divar Teal',
      colors: {
        primary: '#00A693', // Divar's teal
        secondary: '#1F2937', // Dark gray
        background: '#F0FDFA', // Light teal background
      },
      typography: 'IRANYekan',
      shadows: 'Natural Shadows',
      gradients: ['#00A693', '#00C4A9'],
    },
    likes: 389,
    comments: 28,
    isLiked: false,
    isSaved: true,
  },
  {
    id: 7,
    user: {
      name: 'Sheypoor UI',
      avatar: '💰',
      username: '@sheypoor_ui',
    },
    theme: {
      name: 'Sheypoor Blue',
      colors: {
        primary: '#1E40AF', // Sheypoor's blue
        secondary: '#1E3A8A', // Dark blue
        background: '#EFF6FF', // Light blue background
      },
      typography: 'Vazir',
      shadows: 'Material Design',
      gradients: ['#1E40AF', '#3B82F6'],
    },
    likes: 312,
    comments: 23,
    isLiked: true,
    isSaved: true,
  },
  {
    id: 8,
    user: {
      name: 'ZarinPal Team',
      avatar: '💳',
      username: '@zarinpal_team',
    },
    theme: {
      name: 'ZarinPal Gold',
      colors: {
        primary: '#F59E0B', // ZarinPal's gold
        secondary: '#92400E', // Dark brown
        background: '#FFFBEB', // Light yellow background
      },
      typography: 'Samim',
      shadows: 'Soft Shadows',
      gradients: ['#F59E0B', '#FBBF24'],
    },
    likes: 287,
    comments: 19,
    isLiked: false,
    isSaved: false,
  },
];

const sidebarItems = [
  { icon: '🏠', label: 'Home', active: true },
  { icon: '🔍', label: 'Search', active: false },
  { icon: '🧭', label: 'Explore', active: false },
  { icon: '🎨', label: 'My Themes', active: false },
  { icon: '👤', label: 'Profile', active: false },
  { icon: '✉️', label: 'Messages', active: false },
  { icon: '⚙️', label: 'Settings', active: false },
];

export default function Theming() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [themes, setThemes] = useState(mockThemes);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLike = (themeId: number) => {
    setThemes(themes.map((theme) => (theme.id === themeId ? { ...theme, isLiked: !theme.isLiked, likes: theme.likes + (theme.isLiked ? -1 : 1) } : theme)));
  };

  const handleSave = (themeId: number) => {
    setThemes(themes.map((theme) => (theme.id === themeId ? { ...theme, isSaved: !theme.isSaved } : theme)));
  };

  const filteredThemes = themes.filter((themeItem) => themeItem.theme.name.toLowerCase().includes(searchTerm.toLowerCase()) || themeItem.user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
      <Header />

      <Box sx={{ display: 'flex', maxWidth: '100%', margin: '0 auto', p: 4 }}>
        {/* Sidebar */}
        <Box sx={{ width: 280, pr: 4, position: 'sticky', top: 80, height: 'fit-content' }}>
          <Card sx={{ p: 3, background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' : 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)', borderRadius: 3 }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Avatar sx={{ width: 80, height: 80, margin: '0 auto 16px', background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, fontSize: '2rem' }}>👤</Avatar>
              <Typography variant="h6" fontWeight="600">
                Theme Explorer
              </Typography>
              <Typography color="text.secondary">@themeexplorer</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {sidebarItems.map((item, index) => (
                <Button key={index} startIcon={item.icon} sx={{ justifyContent: 'flex-start', background: item.active ? `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)` : 'transparent', color: item.active ? theme.palette.primary.main : theme.palette.text.secondary, border: item.active ? `1px solid ${theme.palette.primary.main}30` : '1px solid transparent', '&:hover': { background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)` } }}>
                  {item.label}
                </Button>
              ))}
            </Box>
          </Card>
        </Box>

        {/* Main Content */}
        <Box sx={{ flex: 1, width: '100%' }}>
          {/* Search Bar */}
          <Grid2 container spacing={2} sx={{ mb: 4 }}>
            <Grid2 size={{ xs: 12, lg: 9 }}>
              <TextField fullWidth placeholder="Search themes, users, colors..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} InputProps={{ startAdornment: <IoSearch style={{ marginRight: 8, color: theme.palette.text.secondary }} /> }} sx={{ background: theme.palette.background.paper, borderRadius: 3, '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 3 }} display={{ xs: 'none', lg: 'inline-block' }}>
              <Button variant="contained" fullWidth startIcon={<IoAdd />} sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, fontWeight: '600', py: 1.8, borderRadius: 2 }}>
                Add New Theme
              </Button>
            </Grid2>
          </Grid2>

          {/* Tabs */}
          <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} sx={{ mb: 3, '& .MuiTab-root': { fontWeight: '600', textTransform: 'none', fontSize: '1rem', color: 'text.primary' } }}>
            {['Featured Themes', 'Popular', 'Recent', 'My Themes'].map((item, index) => (
              <Tab key={index} color={activeTab === index ? 'primary.main' : 'text.primary'} label={item} />
            ))}
          </Tabs>

          {/* Theme Grid */}
          <Grid2 container spacing={2}>
            {filteredThemes.map((themeItem) => (
              <Grid2 key={themeItem.id} size={{ xs: 12, md: 6, xl: 4 }}>
                <Card sx={{ background: theme.palette.background.paper, borderRadius: 3, overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: `0 2px 12px ${themeItem.theme.gradients[0]}35`, '&:hover': { transform: 'translateY(-4px)', boxShadow: `0 12px 40px ${themeItem.theme.gradients[0]}30` } }}>
                  {/* Theme Preview Header */}
                  <Box sx={{ height: 120, background: `linear-gradient(135deg, ${themeItem.theme.gradients[0]}, ${themeItem.theme.gradients[1]})`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                      {themeItem.theme.name}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    {/* User Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ mr: 2, background: `linear-gradient(135deg, ${themeItem.theme.gradients[0]}, ${themeItem.theme.gradients[1]})` }}>{themeItem.user.avatar}</Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="600">
                          {themeItem.user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {themeItem.user.username}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Theme Details */}
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip icon={<IoColorPalette />} sx={{ p: '12px 4px', background: `linear-gradient(135deg, ${themeItem.theme.gradients[0]}15, ${themeItem.theme.gradients[1]}15)`, borderColor: themeItem.theme.gradients[0] }} label="Colors" size="small" variant="outlined" />
                      <Chip icon={<IoText />} sx={{ p: '12px 4px' }} label={themeItem.theme.typography} size="small" variant="outlined" />
                      <Chip icon={<IoAperture />} sx={{ p: '12px 4px' }} label={themeItem.theme.shadows} size="small" variant="outlined" />
                    </Box>

                    {/* Color Palette Preview */}
                    <Box sx={{ display: 'flex', height: 8, borderRadius: 4, overflow: 'hidden', mb: 2 }}>
                      <Box sx={{ flex: 1, background: themeItem.theme.colors.primary }} />
                      <Box sx={{ flex: 1, background: themeItem.theme.colors.secondary }} />
                      <Box sx={{ flex: 1, background: themeItem.theme.colors.background }} />
                    </Box>

                    {/* Actions */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton onClick={() => handleLike(themeItem.id)} sx={{ color: themeItem.isLiked ? theme.palette.error.main : theme.palette.text.secondary }}>
                          {themeItem.isLiked ? <IoHeart /> : <IoHeartOutline />}
                        </IconButton>
                        <IconButton>
                          <IoChatbubble />
                        </IconButton>
                        <IconButton>
                          <IoShare />
                        </IconButton>
                      </Box>

                      <IconButton onClick={() => handleSave(themeItem.id)}>{themeItem.isSaved ? <IoBookmark style={{ color: theme.palette.warning.main }} /> : <IoBookmarkOutline style={{ color: theme.palette.text.secondary }} />}</IconButton>
                    </Box>

                    {/* Stats */}
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {themeItem.likes} likes • {themeItem.comments} comments
                    </Typography>
                  </Box>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
