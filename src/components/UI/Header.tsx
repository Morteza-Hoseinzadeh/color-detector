'use client';

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useThemeMode } from '@/utils/hooks/useThemeMode';

// Icons
import { IoBluetooth, IoWifiOutline, IoBatteryCharging, IoMoon, IoSearch, IoSunny } from 'react-icons/io5';
import { LiaHistorySolid } from 'react-icons/lia';
import { GiGrapes } from 'react-icons/gi';

export default function Header() {
  const { toggleTheme, isDarkMode } = useThemeMode();

  const menuItems = ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'];

  return (
    <Box sx={{ ...styles.header }}>
      {/* Menu Items Section */}
      <Box sx={styles.menuContainer}>
        <Box display={'flex'} alignItems={'center'} color={'primary.main'} mr={1}>
          <IconButton size="small" sx={styles.iconButton}>
            <GiGrapes size={26} />
          </IconButton>
          <Typography variant="h6">AetherUI</Typography>
        </Box>
        {menuItems.map((item) => (
          <Typography key={item} sx={styles.menuItem} variant="body2">
            {item}
          </Typography>
        ))}
      </Box>

      {/* System Info Section */}
      <Box sx={styles.systemInfo}>
        <IconButton size="small" sx={styles.iconButton}>
          <LiaHistorySolid />
        </IconButton>

        <IconButton size="small" sx={styles.iconButton}>
          <IoBluetooth />
        </IconButton>

        <IconButton size="small" sx={styles.iconButton}>
          <IoWifiOutline />
        </IconButton>

        <Box sx={styles.batteryContainer}>
          <Typography variant="caption" sx={styles.percentage}>
            100%
          </Typography>
          <IoBatteryCharging size={16} />
        </Box>

        <Typography variant="caption" sx={styles.language}>
          EN
        </Typography>

        <Typography variant="caption" sx={styles.time}>
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', weekday: 'long' })}
        </Typography>

        <IconButton size="small" sx={styles.iconButton} onClick={toggleTheme} aria-label="Toggle theme">
          {isDarkMode ? <IoMoon /> : <IoSunny />}
        </IconButton>

        <IconButton size="small" sx={styles.iconButton} aria-label="Search">
          <IoSearch />
        </IconButton>
      </Box>
    </Box>
  );
}

const styles = {
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.65rem 1rem',
    borderRadius: '16px',
    mt: 2,
    backdropFilter: 'blur(7.5px)',
    boxSizing: 'border-box',
    color: 'text.primary',
    backgroundColor: 'background.paper',
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  iconButton: {
    padding: '0.25rem',
    color: 'inherit',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  menuItem: {
    fontWeight: 500,
    cursor: 'pointer',
    fontSize: '0.875rem',
    transition: 'all ease-in-out 0.1s',
    '&:hover': {
      color: 'text.disabled',
    },
  },
  systemInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  batteryContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  percentage: {
    fontWeight: 500,
    fontSize: '0.75rem',
  },
  language: {
    fontWeight: 500,
    fontSize: '0.75rem',
    padding: '0.1rem 0.35rem',
    borderRadius: '0.2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  time: {
    fontWeight: 500,
    fontSize: '0.75rem',
    margin: '0 0.25rem',
  },
};
