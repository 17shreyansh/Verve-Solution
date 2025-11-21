import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Circle,
} from '@chakra-ui/react';

const timelineData = [
  {
    year: '2022',
    title: 'Company Founded',
    description: 'Verve Solution India established with a mission to help new entrepreneurs start their businesses easily.',
  },
  {
    year: '2022',
    title: 'First Clients',
    description: 'Successfully helped our first 10 clients with company registration and GST compliance services.',
  },
  {
    year: '2023',
    title: 'Service Expansion',
    description: 'Added income tax filing and basic accounting services to better support growing startups.',
  },
  {
    year: '2023',
    title: 'Growing Client Base',
    description: 'Reached 30+ satisfied clients across Mumbai and nearby cities with personalized service.',
  },
  {
    year: '2024',
    title: 'Continued Growth',
    description: 'Now serving 50+ happy clients with affordable and reliable business compliance solutions.',
  },
];

export default function Timeline() {
  return (
    <VStack spacing={8} align="stretch">
      {timelineData.map((item, index) => (
        <HStack key={index} align="start" spacing={6}>
          <VStack spacing={0}>
            <Circle size="12px" bg="primary.500" />
            {index < timelineData.length - 1 && (
              <Box w="2px" h="60px" bg="border.light" />
            )}
          </VStack>
          <VStack align="start" spacing={2} flex={1}>
            <HStack>
              <Text fontSize="lg" fontWeight="bold" color="primary.500">
                {item.year}
              </Text>
              <Heading size="md" color="text.primary">
                {item.title}
              </Heading>
            </HStack>
            <Text color="text.secondary" fontSize="sm" lineHeight="tall">
              {item.description}
            </Text>
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
}