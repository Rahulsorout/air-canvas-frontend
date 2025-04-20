import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Launch from './pages/LaunchPage';
import CanvasPage from './pages/CanvasPage'; 
import Footer from './components/footer';
import Tutorial from './pages/Tutorial';

function App() {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="/canvas" element={<CanvasPage />} />
          <Route path="/tutorial" element={<Tutorial />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
