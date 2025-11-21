import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Card,
  CardBody,
  Icon,
  Badge,
  Button,
} from '@chakra-ui/react';
import { FiAward, FiUsers, FiGlobe } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

export default function AboutUsSection() {
  return (
    <Box py={{ base: 20, md: 28 }} bg="white" position="relative">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 12, lg: 16 }} alignItems="center">
          <VStack align="start" spacing={8}>
            <VStack align="start" spacing={4}>
              <Badge 
                colorScheme="teal" 
                px={4} 
                py={2} 
                borderRadius="full" 
                fontSize="sm"
                bg="primary.50"
                color="primary.700"
              >
                About Us
              </Badge>
              <Heading 
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} 
                color="text.primary"
                fontWeight="800"
                letterSpacing="tight"
                lineHeight="shorter"
              >
                Supporting New Entrepreneurs Through{' '}
                <Text as="span" bgGradient="linear(to-r, primary.500, primary.700)" bgClip="text">
                  Reliable Service
                </Text>
              </Heading>
            </VStack>
            
            <VStack align="start" spacing={6}>
              <Box p={{ base: 4, md: 6 }} bg="primary.50" borderRadius="xl" borderLeft="4px solid" borderColor="primary.500">
                <Text fontSize={{ base: "md", md: "lg" }} color="text.primary" fontWeight="semibold" mb={2}>
                  Our Mission
                </Text>
                <Text color="text.secondary" lineHeight="tall">
                  Making business registration and compliance simple and affordable for new entrepreneurs. 
                  We guide startups through GST registration, company formation, and tax compliance step by step.
                </Text>
              </Box>
              
              <Text fontSize={{ base: "md", md: "lg" }} color="text.secondary" lineHeight="tall">
                As a growing business services firm, we specialize in helping startups with GST registration, 
                company incorporation, and basic accounting needs. Our dedicated team provides personalized support to new entrepreneurs.
              </Text>
              
              <SimpleGrid columns={{ base: 3, md: 3 }} spacing={{ base: 4, md: 8 }} pt={4} w="full">
                <VStack align="center" spacing={2}>
                  <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="primary.500">5+</Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="text.secondary" textAlign="center">Cities Served</Text>
                </VStack>
                <VStack align="center" spacing={2}>
                  <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="primary.500">10+</Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="text.secondary" textAlign="center">Expert Team</Text>
                </VStack>
                <VStack align="center" spacing={2}>
                  <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="primary.500">95%</Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="text.secondary" textAlign="center">Client Satisfaction</Text>
                </VStack>
              </SimpleGrid>
            </VStack>
            
            <VStack spacing={4} w="full" align="start">
              <Button
                as={RouterLink}
                to="/about"
                size={{ base: "md", md: "lg" }}
                variant="solid"
                w={{ base: "full", md: "auto" }}
              >
                Learn More About Us
              </Button>
              <Button
                as={RouterLink}
                to="/contact"
                size={{ base: "md", md: "lg" }}
                variant="outline"
                w={{ base: "full", md: "auto" }}
              >
                Get in Touch
              </Button>
            </VStack>
          </VStack>
          
          <Box position="relative" display={{ base: "none", lg: "block" }}>
            <Card variant="elevated" bg="white" overflow="hidden">
              <CardBody p={0}>
                <Box
                  bg="linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)"
                  h={{ base: "300px", md: "500px" }}
                  position="relative"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <VStack spacing={{ base: 4, md: 6 }}>
                    <Icon as={FiUsers} boxSize={{ base: 12, md: 16 }} color="primary.300" />
                    <VStack spacing={2}>
                      <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color="text.primary">
                        Expert Team
                      </Text>
                      <Text fontSize={{ base: "sm", md: "md" }} color="text.secondary" textAlign="center">
                        Professional consultants<br />working for your success
                      </Text>
                    </VStack>
                  </VStack>
                  
                  <Box
                    position="absolute"
                    top={{ base: "4", md: "6" }}
                    right={{ base: "4", md: "6" }}
                    bg="white"
                    p={{ base: 3, md: 4 }}
                    borderRadius="lg"
                    boxShadow="lg"
                    border="1px solid"
                    borderColor="border.light"
                    display={{ base: "none", sm: "block" }}
                  >
                    <HStack spacing={3}>
                      <Icon as={FiAward} color="primary.500" boxSize={{ base: 4, md: 5 }} />
                      <VStack align="start" spacing={0}>
                        <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="semibold">Industry Leader</Text>
                        <Text fontSize="xs" color="text.secondary">Since 2014</Text>
                      </VStack>
                    </HStack>
                  </Box>
                  
                  <Box
                    position="absolute"
                    bottom={{ base: "4", md: "6" }}
                    left={{ base: "4", md: "6" }}
                    bg="primary.500"
                    color="white"
                    p={{ base: 3, md: 4 }}
                    borderRadius="lg"
                    boxShadow="lg"
                    display={{ base: "none", sm: "block" }}
                  >
                    <HStack spacing={3}>
                      <Icon as={FiGlobe} boxSize={{ base: 4, md: 5 }} />
                      <VStack align="start" spacing={0}>
                        <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="semibold">Global Reach</Text>
                        <Text fontSize="xs" opacity={0.9}>Worldwide Service</Text>
                      </VStack>
                    </HStack>
                  </Box>
                </Box>
              </CardBody>
            </Card>
            
            <Box
              position="absolute"
              top="-6"
              left="-6"
              w="24"
              h="24"
              bg="primary.100"
              borderRadius="full"
              zIndex="-1"
              opacity="0.6"
            />
            <Box
              position="absolute"
              bottom="-8"
              right="-8"
              w="20"
              h="20"
              bg="accent.gold"
              borderRadius="full"
              zIndex="-1"
              opacity="0.4"
            />
          </Box>
          
          {/* Mobile Image */}
          <Box position="relative" display={{ base: "block", lg: "none" }} mt={8}>
            <Card variant="elevated" bg="white" overflow="hidden">
              <CardBody p={0}>
                <Box
                  bg="linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)"
                  h="200px"
                  position="relative"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <VStack spacing={3}>
                    <Icon as={FiUsers} boxSize={10} color="primary.300" />
                    <VStack spacing={1}>
                      <Text fontSize="md" fontWeight="bold" color="text.primary">
                        Expert Team
                      </Text>
                      <Text fontSize="xs" color="text.secondary" textAlign="center">
                        Professional consultants working for your success
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </CardBody>
            </Card>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}