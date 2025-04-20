// src/pages/TutorialPage.js
import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import Lottie from 'lottie-react';
import tutorialAnimation from '../assets/animations/tutorial.json';  // Place your file here!

const TutorialPage = () => {
  return (
    <Box textAlign="center" mt={5} px={3}>
      <Typography variant="h4" gutterBottom>
        How to Use AIR CANVAS 🎨
      </Typography>
      <Typography variant="body1" paragraph>
        AIR CANVAS lets you draw in the air using simple hand gestures, no physical pen or paper required!
      </Typography>

      <Lottie animationData={tutorialAnimation} style={{ height: 300, margin: '0 auto' }} />

      <Typography variant="h5" mt={4} gutterBottom>
        Step-by-Step Guide:
      </Typography>
      <List sx={{ maxWidth: 600, margin: '0 auto', textAlign: 'left' }}>
        <ListItem>
          <ListItemText primary="1️⃣ Position your Blue-colored pointed object in front of the webcam." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✋ Use an Blue pointed to enter Drawing Mode." />
        </ListItem>
        
        <ListItem>
          <ListItemText primary="🎨 Use specific gestures to switch between colors, brushes, and eraser." />
        </ListItem>
        <ListItem>
          <ListItemText primary="💾 Save your masterpiece using the save on-screen button." />
        </ListItem>
        <ListItem>
          <ListItemText primary="🔄 Undo or Redo your last action via shortcut keys." />
        </ListItem>
        <ListItem>
          <ListItemText primary="⚙️ Adjust brush size with the slider or gesture commands." />
        </ListItem>
      </List>

      <Typography variant="body2" mt={3} color="text.secondary">
        Pro Tip: Make sure you have good lighting and a clear background for better object detection!
      </Typography>

      <Button variant="contained" color="primary" href="/launch" sx={{ mt: 4 }}>
        Try it Now
      </Button>
    </Box>
  );
};

export default TutorialPage;
