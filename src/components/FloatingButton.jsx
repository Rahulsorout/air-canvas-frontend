import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const FloatingButton = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 999 }}
      onClick={() => alert('Floating Button Clicked!')}
    >
      <AddIcon />
    </Fab>
  );
};

export default FloatingButton;
