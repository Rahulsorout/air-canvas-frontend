// src/pages/About.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, Box } from '@mui/material';

const About = () => (
  <Box padding={3}>
    <Typography variant="h4" gutterBottom>About AIR CANVAS</Typography>
    <Typography variant="body1" paragraph>
      AIR CANVAS is an innovative AI-powered virtual drawing platform that allows users to draw, paint, and create digital art in mid-air using hand gestures — no physical touch required!
      Using computer vision techniques and real-time object tracking via OpenCV, AIR CANVAS detects specific colored markers or gestures through a webcam and transforms them into brush strokes on a digital canvas.
      Whether you’re an artist, educator, or simply love creative experiments, AIR CANVAS offers an intuitive and interactive way to turn your imagination into visible art.
    </Typography>

    <Typography variant="body1" paragraph>
      The project combines the power of Python, OpenCV, and machine learning concepts to provide features like:
      dynamic brush size adjustment, multiple color selection, undo/redo support, shape drawing, saving to image formats, and even voice-command-based control — offering a futuristic, touchless drawing experience.
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          {/* <CardMedia
            component="img"
            height="200"
            image="/images/2.jpg"
            alt="AI Drawing"
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          /> */}
          <CardContent>
            <Typography variant="h6">AI-Powered Drawing</Typography>
            <Typography variant="body2" color="textSecondary">
              Transform your hand movements into digital art using advanced object detection and gesture tracking. AIR CANVAS turns your gestures into creative strokes in real-time!
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card>
          {/* <CardMedia
            component="img"
            height="200"
            image="/images/3.jpg"
            alt="Hands-Free Experience"
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          /> */}
          <CardContent>
            <Typography variant="h6">Hands-Free Interaction</Typography>
            <Typography variant="body2" color="textSecondary">
              Say goodbye to mouse and touchscreens! Create, edit, and control your drawings using only gestures, making AIR CANVAS perfect for contactless interaction.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card>
          {/* <CardMedia
            component="img"
            height="200"
            image="/images/4.jpg"
            alt="Customization & Tools"
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          /> */}
          <CardContent>
            <Typography variant="h6">Smart Tools & Features</Typography>
            <Typography variant="body2" color="textSecondary">
              Adjust brush size, pick colors, draw shapes, undo/redo your actions, save your artwork, and even control AIR CANVAS with voice commands — designed for ultimate flexibility.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default About;
