import React, { useState } from 'react';
import { Button, Stack, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animations/loading.json';
import successAnimation from '../assets/animations/success.json';

const LaunchPage = () => {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const handleStart = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://air-canvas-backend.onrender.com/start');
      console.log('Backend Response:', response);

      if (response.status === 200 && response.data === 'Air Canvas Started!') {
        setSnackbar({ open: true, message: 'AIR CANVAS launched successfully!', severity: 'success' });
        setShowVideo(true);  // Show video feed
      } else {
        setSnackbar({ open: true, message: 'Failed to launch AIR CANVAS.', severity: 'error' });
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response : error);
      setSnackbar({ open: true, message: error.response ? error.response.data : 'Failed to launch AIR CANVAS.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleStop = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://air-canvas-backend.onrender.com/stop');
      console.log('Backend Response:', response);

      if (response.status === 200 && response.data === 'Air Canvas Stopped!') {
        setSnackbar({ open: true, message: 'AIR CANVAS stopped successfully.', severity: 'success' });
        setShowVideo(false);  // Stop showing video
      } else {
        setSnackbar({ open: true, message: 'Failed to stop AIR CANVAS.', severity: 'error' });
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response : error);
      setSnackbar({ open: true, message: error.response ? error.response.data : 'Failed to stop AIR CANVAS.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={4} alignItems="center" mt={8}>
      {loading ? (
        <Lottie animationData={loadingAnimation} style={{ height: 150 }} />
      ) : showVideo ? (
        <>
          <img
            src="https://air-canvas-backend.onrender.com/video_feed"
            alt="Air Canvas Live Feed"
            style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }}
          />
          <Button variant="contained" color="error" onClick={handleStop} size="large">
            Stop AIR CANVAS
          </Button>
        </>
      ) : (
        <>
          <Button variant="contained" color="success" onClick={handleStart} size="large">
            Launch AIR CANVAS
          </Button>
          <Button variant="contained" color="error" onClick={handleStop} size="large">
            Stop AIR CANVAS
          </Button>
        </>
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          sx={{ fontWeight: 'bold' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default LaunchPage;
