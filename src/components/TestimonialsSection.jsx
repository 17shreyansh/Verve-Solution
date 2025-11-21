import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Button,
  Card,
  CardBody,
  Icon,
} from '@chakra-ui/react';
import { FiStar } from 'react-icons/fi';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'TechStart Solutions',
    testimonial: 'Verve Solution helped us register our startup quickly and at an affordable price. Their team guided us through GST registration step by step.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'Creative Design Studio',
    testimonial: 'Great service for new businesses! They made company registration simple and explained everything clearly. Very helpful for first-time entrepreneurs.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    company: 'Local Trading Co.',
    testimonial: 'Affordable and reliable service. The team is always available to answer questions and help with our basic accounting and tax needs.',
    rating: 5,
  },
];

function TestimonialCard({ name, company, testimonial, rating }) {
  return (
    <Card bg="white" shadow="md" borderRadius="xl" overflow="hidden" h="full">
      <CardBody p={{ base: 4, md: 6 }}>
        <VStack align="start" spacing={4} h="full">
          <Icon as={BiSolidQuoteAltLeft} boxSize={6} color="primary.500" />
          <Text fontSize={{ base: "sm", md: "md" }} color="text.secondary" lineHeight="tall" flex="1">
            "{testimonial}"
          </Text>
          <VStack align="start" spacing={2} w="full">
            <HStack spacing={1}>
              {[...Array(rating)].map((_, i) => (
                <Icon key={i} as={FiStar} boxSize={4} color="yellow.400" fill="currentColor" />
              ))}
            </HStack>
            <VStack align="start" spacing={0}>
              <Text fontSize={{ base: "sm", md: "md" }} fontWeight="semibold" color="text.primary">
                {name}
              </Text>
              <Text fontSize={{ base: "xs", md: "sm" }} color="text.secondary">
                {company}
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default function TestimonialsSection() {
  return (
    <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50">
      <Container maxW="7xl">
        <VStack spacing={{ base: 8, md: 12 }}>
          <VStack spacing={{ base: 3, md: 4 }} textAlign="center" maxW="4xl">
            <Badge 
              colorScheme="teal" 
              px={3} 
              py={1} 
              borderRadius="full" 
              fontSize="xs"
              bg="primary.50"
              color="primary.700"
            >
              Client Success Stories
            </Badge>
            <Heading 
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
              color="text.primary"
              fontWeight="700"
              lineHeight="shorter"
            >
              What Our Clients Say
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="text.secondary" lineHeight="relaxed">
              See how we've helped new entrepreneurs get started
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 4, md: 6 }} w="full">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </SimpleGrid>
          
          <VStack spacing={4} textAlign="center">
            <Text fontSize={{ base: "sm", md: "md" }} color="text.secondary">
              Ready to join our success stories?
            </Text>
            <HStack spacing={3} flexWrap="wrap" justify="center">
              <Button
                as={RouterLink}
                to="/contact"
                size={{ base: "sm", md: "md" }}
                variant="solid"
                minW={{ base: "140px", md: "160px" }}
              >
                Get Started
              </Button>
              <Button
                as={RouterLink}
                to="/about"
                size={{ base: "sm", md: "md" }}
                variant="outline"
                minW={{ base: "140px", md: "160px" }}
              >
                Learn More
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}