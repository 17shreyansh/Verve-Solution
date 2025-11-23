import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Badge,
  Flex,
} from '@chakra-ui/react';
import { FiPlay, FiArrowRight, FiAward, FiUsers, FiGlobe } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

export default function HeroBanner() {
  return (
    <Box 
      bg="linear-gradient(135deg, rgba(247,249,251,1) 0%, rgba(237,242,247,1) 100%)"
      py={{ base: 20, md: 28 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.03"
        backgroundImage="radial-gradient(circle at 25% 25%, #2BB6A3 0%, transparent 50%), radial-gradient(circle at 75% 75%, #2BB6A3 0%, transparent 50%)"
      />
      
      <Container maxW={'7xl'} position="relative">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
          <Stack spacing={8}>
            {/* Badge */}
            <HStack>
              <Badge 
                colorScheme="green" 
                px={3} 
                py={1} 
                borderRadius="full" 
                fontSize="sm"
                bg="primary.50"
                color="primary.700"
                border="1px solid"
                borderColor="primary.200"
              >
                <Icon as={FiAward} mr={1} />
Growing with 50+ Happy Clients
              </Badge>
            </HStack>
            
            <VStack align="start" spacing={6}>
              <Heading
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="800"
                color="text.primary"
                lineHeight="shorter"
                letterSpacing="tight"
              >
                Your Trusted{' '}
                <Text 
                  as="span" 
                  bgGradient="linear(to-r, primary.500, primary.700)"
                  bgClip="text"
                >
                  Business Partner
                </Text>{' '}
                for Growth & Compliance
              </Heading>
              
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                color="text.secondary"
                maxW="600px"
                lineHeight="tall"
                fontWeight="400"
              >
                Verve Solution helps new entrepreneurs and growing businesses with affordable GST registration, 
                company formation, tax filing, and expert business guidance.
              </Text>
              
              {/* Trust Indicators */}
              <HStack spacing={8} py={4}>
                <VStack spacing={1}>
                  <HStack>
                    <Icon as={FiUsers} color="primary.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="text.primary">50+</Text>
                  </HStack>
                  <Text fontSize="sm" color="text.secondary">Happy Clients</Text>
                </VStack>
                <VStack spacing={1}>
                  <HStack>
                    <Icon as={FiGlobe} color="primary.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="text.primary">2+</Text>
                  </HStack>
                  <Text fontSize="sm" color="text.secondary">Years Experience</Text>
                </VStack>

              </HStack>
            </VStack>
            
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={4}>
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                variant="solid"
                px={8}
                py={6}
                fontSize="lg"
                rightIcon={<FiArrowRight />}
              >
                Get Free Consultation
              </Button>
              <Button
                as={RouterLink}
                to="/services"
                size="lg"
                variant="outline"
                px={8}
                py={6}
                fontSize="lg"
                leftIcon={<FiPlay />}
              >
                Explore Services
              </Button>
            </Stack>
          </Stack>
          
          <Box position="relative">
            {/* Main Image Container */}
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="2xl"
              p={8}
              position="relative"
              overflow="hidden"
            >
              <Box
                bg="linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)"
                h={{ base: '350px', md: '450px' }}
                borderRadius="xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="gray.500"
                position="relative"
              >
                <VStack spacing={4}>
                  <Icon as={FiUsers} boxSize={12} color="primary.300" />
                  <Text fontSize="lg" textAlign="center" fontWeight="semibold">
                    Professional Corporate<br />Team Collaboration
                  </Text>
                </VStack>
                
                {/* Floating Elements */}
                <Box
                  position="absolute"
                  top="4"
                  right="4"
                  bg="primary.500"
                  color="white"
                  p={3}
                  borderRadius="lg"
                  boxShadow="lg"
                >
                  <Icon as={FiAward} boxSize={5} />
                </Box>
                
                <Box
                  position="absolute"
                  bottom="4"
                  left="4"
                  bg="white"
                  p={3}
                  borderRadius="lg"
                  boxShadow="lg"
                  border="1px solid"
                  borderColor="border.light"
                >
                  <HStack>
                    <Icon as={FiGlobe} color="primary.500" />
                    <Text fontSize="sm" fontWeight="semibold">Global Reach</Text>
                  </HStack>
                </Box>
              </Box>
            </Box>
            
            {/* Background Decoration */}
            <Box
              position="absolute"
              top="-4"
              right="-4"
              w="20"
              h="20"
              bg="primary.100"
              borderRadius="full"
              zIndex="-1"
            />
            <Box
              position="absolute"
              bottom="-6"
              left="-6"
              w="16"
              h="16"
              bg="accent.gold"
              borderRadius="full"
              opacity="0.3"
              zIndex="-1"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}