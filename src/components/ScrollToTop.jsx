import React, { useState, useEffect } from 'react';
import { IconButton, Box } from '@chakra-ui/react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      position="fixed"
      bottom="8"
      right="8"
      zIndex="1000"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'translateY(0)' : 'translateY(20px)'}
      transition="all 0.3s ease"
      pointerEvents={isVisible ? 'auto' : 'none'}
    >
      <IconButton
        aria-label="Scroll to top"
        icon={<FiArrowUp />}
        onClick={scrollToTop}
        size="lg"
        variant="solid"
        colorScheme="primary"
        borderRadius="full"
        boxShadow="0 4px 20px rgba(43,182,163,0.3)"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 25px rgba(43,182,163,0.4)',
        }}
      />
    </Box>
  );
}