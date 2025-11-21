import React, { Suspense, lazy } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box display="flex" flexDirection="column">
          <NavBar />
          <Box flex="1">
            <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </Box>
          <Footer />
          <ScrollToTop />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;