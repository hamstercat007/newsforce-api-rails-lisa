import * as React from 'react';
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';

export default function TagButtons({ continent }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" size="small" color="error">
        {continent}
      </Button>
    </Stack>
  );
}
