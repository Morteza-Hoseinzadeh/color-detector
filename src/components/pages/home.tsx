'use client';

import React from 'react';
import { Grid2 } from '@mui/material';

import Header from '../UI/Header';
import Sidebar from '@/components/UI/Sidebar';
import PaletteCard from '../UI/PaletteCard';
import ColorsPreview from '../UI/ColorsPreview';

export default function Home() {
  return (
    <Grid2 container spacing={2} mx={2}>
      <Grid2 size={12}>
        <Header />
      </Grid2>
      <Grid2 size={2}>
        <Sidebar />
      </Grid2>
      <Grid2 size={6}>
        <PaletteCard />
      </Grid2>
      <Grid2 size={4}>
        <ColorsPreview />
      </Grid2>
    </Grid2>
  );
}
