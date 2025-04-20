import React from 'react';
import { Box, Typography, Link} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => (
    
  <Box 
  sx={{
    mt: 30,  // Adds a margin-top to create space above the footer
    py: 3,  // Adds padding inside the footer for top and bottom spacing
    backgroundColor: '#555',
    color: '#fff',
    textAlign: 'center',
  }}
    
  >
    <Typography variant="body2" color="textSecondary">
      &copy; 2025 AIR CANVAS. All rights reserved.
    </Typography>
    <Box>
    
    </Box>
    <Box>
  <Typography variant="body2" color="textSecondary" gutterBottom>
    Developed by: Team Air Canvas
  </Typography>
  <Link href="https://github.com/yourusername" target="_blank" rel="noopener" style={{ margin: '0 10px' }}>GitHub</Link>
  <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" style={{ margin: '0 10px' }}>LinkedIn</Link>
</Box>

  </Box>
);

export default Footer;
