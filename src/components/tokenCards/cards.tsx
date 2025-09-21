import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';

export default function Cards() {
  return (
    <Box>
      <Box>
        <Typography color="text.primary">You Pay</Typography>
        <Box>
          <Box>
            <Typography color="text.primary">Half</Typography>
          </Box>
          <Box>
            <Typography color="text.primary">Max</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <IconButton disabled>USTD ICON</IconButton>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}
