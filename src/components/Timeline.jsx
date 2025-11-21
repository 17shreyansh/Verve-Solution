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
    year: '2009',
    title: 'Company Founded',
    description: 'Verve Solution India established to serve the growing needs of Indian entrepreneurs and businesses.',
  },
  {
    year: '2017',
    title: 'GST Implementation Support',
    description: 'Helped 500+ businesses transition smoothly to the new GST regime with expert guidance and support.',
  },
  {
    year: '2019',
    title: 'Digital Services Launch',
    description: 'Launched online GST filing, company registration, and digital compliance services for faster processing.',
  },
  {
    year: '2021',
    title: 'Pan-India Expansion',
    description: 'Extended services to 25+ Indian cities, helping startups and SMEs with comprehensive business solutions.',
  },
  {
    year: '2024',
    title: 'Market Leadership',
    description: 'Serving 1000+ Indian businesses with expert CA/CS team and comprehensive compliance solutions.',
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