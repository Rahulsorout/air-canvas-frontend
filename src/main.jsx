import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and render your app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
