import React, { useState } from 'react';
import { Button, Stack, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FloatingButton from '../components/FloatingButton';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animations/loading.json';
import successAnimation from '../assets/animations/success.json';

const LaunchPage = () => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const navigate = useNavigate();

  const handleStart = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/start');
      console.log('Backend Response:', response);  // Log the full response
      if (response.status === 200 && response.data === 'Air Canvas Started!') {
        setSnackbar({ open: true, message: 'AIR CANVAS launched successfully!', severity: 'success' });
        setTimeout(() => navigate('/canvas'), 1500);
      } else {
        setSnackbar({ open: true, message: 'Failed to launch AIR CANVAS.', severity: 'error' });
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response : error);  // More detailed error handling
      setSnackbar({ open: true, message: error.response ? error.response.data : 'Failed to launch AIR CANVAS.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleStop = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/stop');
      console.log('Backend Response:', response);  // Log the full response
      if (response.status === 200 && response.data === 'Air Canvas Stopped!') {
        setSnackbar({ open: true, message: 'AIR CANVAS stopped successfully.', severity: 'success' });
      } else {
        setSnackbar({ open: true, message: 'Failed to stop AIR CANVAS.', severity: 'error' });
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response : error);  // More detailed error handling
      setSnackbar({ open: true, message: error.response ? error.response.data : 'Failed to stop AIR CANVAS.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={4} alignItems="center" mt={8}>
      {loading ? (
        <Lottie animationData={loadingAnimation} style={{ height: 150 }} />
      ) : showSuccess ? (
        <Lottie animationData={successAnimation} style={{ height: 150 }} />
      ) : (
        <>
          <Button
            variant="contained"
            color="success"
            onClick={handleStart}
            size="large"
          >
            Launch AIR CANVAS
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleStop}
            size="large"
          >
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

      {/* <FloatingButton /> */}
    </Stack>
  );
};

export default LaunchPage;
