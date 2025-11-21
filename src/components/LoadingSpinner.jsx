import React from 'react';
import { Box, Spinner, VStack, Text } from '@chakra-ui/react';

export default function LoadingSpinner({ message = 'Loading...', size = 'xl' }) {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(255, 255, 255, 0.9)"
      backdropFilter="blur(5px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="9999"
    >
      <VStack spacing={4}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="primary.500"
          size={size}
        />
        <Text color="text.secondary" fontSize="lg" fontWeight="medium">
          {message}
        </Text>
      </VStack>
    </Box>
  );
}