import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

export default function ParallaxSection({ children, speed = 0.5, ...props }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      {...props}
      style={{
        transform: `translateY(${offsetY * speed}px)`,
        ...props.style,
      }}
    >
      {children}
    </Box>
  );
}