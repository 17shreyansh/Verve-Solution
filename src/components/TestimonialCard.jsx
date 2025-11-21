import React from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Avatar,
  Card,
  CardBody,
  Icon,
  Badge,
} from '@chakra-ui/react';
import { FiStar } from 'react-icons/fi';

export default function TestimonialCard({ name, company, testimonial, rating = 5 }) {
  return (
    <Card 
      h="full" 
      variant="elevated"
      bg="white"
      border="1px solid"
      borderColor="gray.100"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        borderColor: 'primary.200',
      }}
      transition="all 0.3s ease"
      position="relative"
      overflow="hidden"
    >
      {/* Quote Icon */}
      <Box
        position="absolute"
        top="4"
        right="4"
        color="primary.200"
        opacity="0.6"
        fontSize="2xl"
        fontWeight="bold"
      >
        "
      </Box>
      
      <CardBody p={8}>
        <VStack spacing={6} align="start" h="full">
          {/* Rating */}
          <HStack spacing={1}>
            {[...Array(rating)].map((_, i) => (
              <Icon key={i} as={FiStar} color="yellow.400" fill="currentColor" boxSize={4} />
            ))}
            <Badge colorScheme="yellow" variant="subtle" ml={2} borderRadius="full">
              {rating}.0
            </Badge>
          </HStack>
          
          {/* Testimonial Text */}
          <Text 
            color="text.secondary" 
            fontSize="md" 
            flex={1} 
            lineHeight="tall"
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              left: '-4',
              top: '0',
              bottom: '0',
              width: '3px',
              bg: 'primary.200',
              borderRadius: 'full',
            }}
            pl={6}
          >
            "{testimonial}"
          </Text>
          
          {/* Author Info */}
          <HStack spacing={4} w="full" pt={4} borderTop="1px solid" borderColor="gray.100">
            <Avatar 
              size="md" 
              name={name} 
              bg="primary.500"
              color="white"
              fontWeight="bold"
            />
            <VStack align="start" spacing={1} flex={1}>
              <Text fontSize="md" fontWeight="bold" color="text.primary">
                {name}
              </Text>
              <Text fontSize="sm" color="text.secondary" fontWeight="medium">
                {company}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </CardBody>
      
      {/* Gradient Border Effect */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="2px"
        bgGradient="linear(to-r, primary.400, primary.600)"
        opacity="0.8"
      />
    </Card>
  );
}