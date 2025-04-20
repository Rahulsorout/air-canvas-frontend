import React from 'react';
import { Box, Grid, Button, Typography, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#fafafa' }}>
      {/* Hero Section */}
      <Grid container spacing={4} justifyContent="center" alignItems="center" textAlign="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1976d2' }} gutterBottom>
            Welcome to AIR CANVAS
          </Typography>
          <Typography variant="h6" sx={{ color: '#555' }} paragraph>
            Turn your gestures into beautiful art with AI-powered canvas.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            component={RouterLink} 
            to="/launch"
            size="large"
            sx={{ marginTop: '20px' }}
          >
            Start Drawing
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <img 
            src="/images/homeimg.png" 
            alt="AI Drawing" 
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          />
        </Grid>
      </Grid>

      {/* Developer Info Section */}
      <Box sx={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Developed by Team Air Canvas
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Passionate about AI, Web Development, and real-world solutions.
        </Typography>

        {/* Social Media Icons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton 
            component="a" 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener" 
            color="inherit"
          >
            <GitHub />
          </IconButton>
          <IconButton 
            component="a" 
            href="https://www.linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener" 
            color="inherit"
          >
            <LinkedIn />
          </IconButton>
          <IconButton 
            component="a" 
            href="https://www.instagram.com/yourusername" 
            target="_blank" 
            rel="noopener" 
            color="inherit"
          >
            <Instagram />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
