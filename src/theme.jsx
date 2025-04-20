import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', // Customize primary color
      },
      secondary: {
        main: '#ff4081', // Secondary color
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif', // Set a professional font
    },
  });
  
export default theme;
