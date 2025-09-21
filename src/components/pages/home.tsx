'use client';

import React from 'react';
import { Grid2 } from '@mui/material';

import Header from '../UI/Header';
import Sidebar from '@/components/UI/Sidebar';

export default function Home() {
  return (
    <Grid2 container spacing={2} mx={2}>
      <Grid2 size={12}>
        <Header />
      </Grid2>
      <Grid2 size={3}>
        <Sidebar />
      </Grid2>
      <Grid2 size={6}>
        <span>MainContent</span>
      </Grid2>
      <Grid2 size={3}>
        <span>Color Palette</span>
      </Grid2>
    </Grid2>
  );
}
