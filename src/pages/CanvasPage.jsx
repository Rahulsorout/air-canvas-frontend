import React, { useState } from 'react';
import { Button, Stack, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animations/loading.json';
import successAnimation from '../assets/animations/success.json';

const CanvasPage = () => {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [canvasRunning, setCanvasRunning] = useState(true);  // Keep track of whether the canvas is running
  const navigate = useNavigate();

  const handleStop = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/stop');
      if (response.status === 200) {
        setSnackbar({ open: true, message: 'AIR CANVAS stopped successfully.', severity: 'success' });
        setCanvasRunning(false);  // Update state to indicate canvas is not running
      } else {
        throw new Error('Stop failed');
      }
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to stop AIR CANVAS.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={4} alignItems="center" mt={8}>
      {loading ? (
        <Lottie animationData={loadingAnimation} style={{ height: 150 }} />
      ) : canvasRunning ? (
        <>
          <Lottie animationData={successAnimation} style={{ height: 150 }} />
          <Button
            variant="contained"
            color="error"
            onClick={handleStop}
            size="large"
          >
            Stop AIR CANVAS
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate('/')}
          size="large"
        >
          Go Back to Launch Page
        </Button>
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

export default CanvasPage;
