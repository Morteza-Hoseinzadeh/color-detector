import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeMode, toggleThemeMode } from '@/utils/toolkit/themeSlice';
import { lightTheme, darkTheme } from '@/utils/theme/theme';

export const useThemeMode = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  // Initialize theme on first load
  React.useEffect(() => {
    const savedMode = localStorage.getItem('system-theme-mode');

    if (savedMode) {
      dispatch(setThemeMode(savedMode === 'dark'));
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dispatch(setThemeMode(systemPrefersDark));
    }
  }, [dispatch]);

  // Save theme changes to localStorage
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('system-theme-mode', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    dispatch(toggleThemeMode());
  };

  return { isDarkMode, theme, toggleTheme };
};
