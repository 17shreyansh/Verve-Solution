import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Card,
  CardBody,
  Icon,
  Badge,
} from '@chakra-ui/react';
import { FiAward, FiUsers, FiGlobe, FiClock, FiTrendingUp, FiShield } from 'react-icons/fi';
import AnimatedCounter from './AnimatedCounter';
import ParallaxSection from './ParallaxSection';

export default function WhyChooseUs() {
  return (
    <Box py={{ base: 20, md: 28 }} bg="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" position="relative">
      <ParallaxSection speed={-0.2}>
        <Box
          position="absolute"
          top="10%"
          right="10%"
          w="200px"
          h="200px"
          bg="primary.100"
          borderRadius="full"
          opacity="0.3"
          filter="blur(40px)"
        />
      </ParallaxSection>
      
      <Container maxW="7xl" position="relative">
        <VStack spacing={16} textAlign="center">
          <VStack spacing={6}>
            <Badge 
              colorScheme="teal" 
              px={4} 
              py={2} 
              borderRadius="full" 
              fontSize="sm"
              bg="primary.50"
              color="primary.700"
            >
              Why Choose Us
            </Badge>
            <Heading 
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} 
              color="text.primary"
              fontWeight="800"
              letterSpacing="tight"
            >
              India's Most Trusted Business Partner
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="text.secondary" maxW="700px" lineHeight="tall">
              We simplify complex Indian business regulations and provide expert guidance for GST, 
              taxation, and company compliance. Our success stories speak for themselves.
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 4, md: 8 }} w="full">
            <Card variant="elevated" bg="white" textAlign="center">
              <CardBody p={{ base: 6, md: 8 }}>
                <VStack spacing={4}>
                  <Box p={{ base: 3, md: 4 }} bg="primary.50" borderRadius="full">
                    <Icon as={FiClock} boxSize={{ base: 6, md: 8 }} color="primary.500" />
                  </Box>
                  <VStack spacing={1}>
                    <AnimatedCounter end={15} suffix="+" />
                    <Text color="text.primary" fontSize={{ base: "md", md: "lg" }} fontWeight="semibold">Years in India</Text>
                    <Text fontSize="sm" color="text.secondary">
                      Serving Indian businesses
                    </Text>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
            
            <Card variant="elevated" bg="white" textAlign="center">
              <CardBody p={{ base: 6, md: 8 }}>
                <VStack spacing={4}>
                  <Box p={{ base: 3, md: 4 }} bg="blue.50" borderRadius="full">
                    <Icon as={FiUsers} boxSize={{ base: 6, md: 8 }} color="blue.500" />
                  </Box>
                  <VStack spacing={1}>
                    <AnimatedCounter end={1000} suffix="+" />
                    <Text color="text.primary" fontSize={{ base: "md", md: "lg" }} fontWeight="semibold">Indian Clients</Text>
                    <Text fontSize="sm" color="text.secondary">
                      Across 25+ cities
                    </Text>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
            
            <Card variant="elevated" bg="white" textAlign="center">
              <CardBody p={{ base: 6, md: 8 }}>
                <VStack spacing={4}>
                  <Box p={{ base: 3, md: 4 }} bg="green.50" borderRadius="full">
                    <Icon as={FiTrendingUp} boxSize={{ base: 6, md: 8 }} color="green.500" />
                  </Box>
                  <VStack spacing={1}>
                    <AnimatedCounter end={98} suffix="%" />
                    <Text color="text.primary" fontSize={{ base: "md", md: "lg" }} fontWeight="semibold">Success Rate</Text>
                    <Text fontSize="sm" color="text.secondary">
                      Client satisfaction
                    </Text>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
            
            <Card variant="elevated" bg="white" textAlign="center">
              <CardBody p={{ base: 6, md: 8 }}>
                <VStack spacing={4}>
                  <Box p={{ base: 3, md: 4 }} bg="purple.50" borderRadius="full">
                    <Icon as={FiShield} boxSize={{ base: 6, md: 8 }} color="purple.500" />
                  </Box>
                  <VStack spacing={1}>
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="purple.500">24/7</Text>
                    <Text color="text.primary" fontSize={{ base: "md", md: "lg" }} fontWeight="semibold">Support</Text>
                    <Text fontSize="sm" color="text.secondary">
                      Always available
                    </Text>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" pt={8}>
            <VStack spacing={4} textAlign="center">
              <Icon as={FiAward} boxSize={12} color="primary.500" />
              <Heading size="md" color="text.primary">CA & CS Experts</Heading>
              <Text fontSize="sm" color="text.secondary" textAlign="center">
                Qualified Chartered Accountants and Company Secretaries with deep Indian tax knowledge
              </Text>
            </VStack>
            
            <VStack spacing={4} textAlign="center">
              <Icon as={FiGlobe} boxSize={12} color="primary.500" />
              <Heading size="md" color="text.primary">Indian Compliance</Heading>
              <Text fontSize="sm" color="text.secondary" textAlign="center">
                Expert knowledge of GST, Income Tax, ROC compliance, and Indian business regulations
              </Text>
            </VStack>
            
            <VStack spacing={4} textAlign="center">
              <Icon as={FiShield} boxSize={12} color="primary.500" />
              <Heading size="md" color="text.primary">Trusted Partnership</Heading>
              <Text fontSize="sm" color="text.secondary" textAlign="center">
                Long-term relationships built on trust, transparency, and results
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}