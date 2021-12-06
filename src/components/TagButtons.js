import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function TagButtons({ tag_list }) {
  return (
    <Stack spacing={2} direction="row">
      {tag_list.map((tag) => {
        return (
          <Button size="small" variant="outlined">
            {tag}
          </Button>
        );
      })}
    </Stack>
  );
}
