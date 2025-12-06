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
      minH={{ base: 'auto', md: '100vh' }}
      display="flex"
      alignItems="center"
      py={{ base: 20, md: 0 }}
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
          
          <Box position="relative" h={{ base: '300px', md: '450px' }} display="flex" alignItems="center" justifyContent="center">
            <Box
              position="absolute"
              w="300px"
              h="300px"
              borderRadius="full"
              bg="primary.100"
              opacity="0.4"
              filter="blur(60px)"
              animation="pulse 3s ease-in-out infinite"
            />
            <Box
              position="absolute"
              top="20%"
              right="10%"
              w="150px"
              h="150px"
              borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
              bg="primary.500"
              opacity="0.2"
              animation="float 6s ease-in-out infinite"
            />
            <Box
              position="absolute"
              bottom="15%"
              left="15%"
              w="120px"
              h="120px"
              borderRadius="63% 37% 54% 46% / 55% 48% 52% 45%"
              bg="blue.400"
              opacity="0.3"
              animation="float 8s ease-in-out infinite reverse"
            />
            <Box
              position="absolute"
              top="40%"
              left="20%"
              w="80px"
              h="80px"
              borderRadius="full"
              border="3px solid"
              borderColor="primary.300"
              opacity="0.5"
            />
            <Box
              position="absolute"
              bottom="30%"
              right="25%"
              w="60px"
              h="60px"
              transform="rotate(45deg)"
              bg="green.300"
              opacity="0.3"
            />
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  );
}