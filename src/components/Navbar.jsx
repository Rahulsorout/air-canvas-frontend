// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
      <Box 
  component="img" 
  src="/images/logo.png" 
  alt="Air Canvas Logo" 
  sx={{ 
    height: 50, 
    width: 50, 
    borderRadius: '50%', 
    objectFit: 'cover', 
    marginRight: 2 
  }} 
/>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AIR CANVAS
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ '&:hover': { backgroundColor: '#1976d2' } }}>Home</Button>
          <Button color="inherit" component={Link} to="/about" sx={{ '&:hover': { backgroundColor: '#1976d2' } }}>About</Button>
          <Button color="inherit" component={Link} to="/launch" sx={{ '&:hover': { backgroundColor: '#1976d2' } }}>Launch</Button>
          <Button color="inherit" component={Link} to="/tutorial" sx={{ '&:hover': { backgroundColor: '#1976d2' } }}>Tutorial</Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
