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
    year: '2014',
    title: 'Company Founded',
    description: 'Verve Solution Pty Ltd established with a vision to provide world-class financial advisory services.',
  },
  {
    year: '2017',
    title: 'International Expansion',
    description: 'Extended services to international markets, helping businesses navigate global compliance requirements.',
  },
  {
    year: '2019',
    title: 'Digital Transformation',
    description: 'Implemented cutting-edge technology solutions to enhance service delivery and client experience.',
  },
  {
    year: '2021',
    title: 'Specialized Services Launch',
    description: 'Introduced Virtual CFO services and advanced tax advisory solutions for growing enterprises.',
  },
  {
    year: '2024',
    title: 'Continued Growth',
    description: 'Serving 500+ clients globally with comprehensive financial and advisory solutions.',
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
            <Text color="text.secondary" fontSize="sm">
              {item.description}
            </Text>
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
}