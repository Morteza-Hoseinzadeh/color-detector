import React from 'react';
import { Box } from '@mui/material';
import { TbBell } from 'react-icons/tb';

export default function Header() {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
      <TbBell />
    </Box>
  );
}
