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
    company: 'TechStart India Pvt Ltd',
    testimonial: 'Verve Solution made our GST registration and compliance effortless. Their team handled everything from company registration to monthly GST filing perfectly.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'Digital Marketing Solutions',
    testimonial: 'Excellent service for our startup registration and accounting needs. The team is very knowledgeable about Indian tax laws and ROC compliance.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    company: 'Manufacturing Hub Ltd',
    testimonial: 'Professional and reliable service. Verve Solution has been our trusted partner for all GST, income tax, and business advisory needs.',
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
              See how we've helped Indian businesses succeed
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