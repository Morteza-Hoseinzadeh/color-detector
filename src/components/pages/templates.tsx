'use client';

import React, { useState } from 'react';
import { Grid2, Drawer } from '@mui/material';

import Header from '../UI/Header';
import Sidebar from '@/components/UI/Sidebar';
import PaletteCard from '../UI/templates/PaletteCard';
import ColorsPreview from '../UI/templates/ColorsPreview';

export default function Templates() {
  const [showPreview, setShowPreview] = useState(false);
  const [colorPreview, setColorPreview] = useState('');
  const [isActive, setIsActive] = useState('zephyr-project');

  const mocks_project = [
    { id: 'abcdefg-1234', title: 'zephyr-project' },
    { id: 'hijklm-5678', title: 'dourna-clinic-project' },
    { id: 'nopqrs-9101', title: 'zichat-project' },
  ];

  return (
    <Grid2 container spacing={2} mx={2}>
      <Grid2 size={12}>
        <Header />
      </Grid2>

      <Grid2 size={2}>
        <Sidebar isActive={isActive} setIsActive={setIsActive} mocks_project={mocks_project} />
      </Grid2>

      <Grid2 size={showPreview ? 6 : 10} zIndex={1}>
        <PaletteCard isActive={isActive} showPreview={showPreview} setShowPreview={setShowPreview} colorPreview={colorPreview} setColorPreview={setColorPreview} />
      </Grid2>

      {showPreview && (
        <Grid2 size={4} zIndex={1}>
          <ColorsPreview colorPreview={colorPreview} setShowPreview={setShowPreview} />
        </Grid2>
      )}
    </Grid2>
  );
}
