import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  VStack,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import logoOnly from '../assets/logo only.png';

export default function Footer() {
  return (
    <Box bg="text.primary" color="white">
      <Container maxW="7xl" py={{ base: 8, md: 12 }}>
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 8, md: 10 }}>
          <VStack align={{ base: 'center', lg: 'start' }} spacing={4} flex={1} textAlign={{ base: 'center', lg: 'left' }}>
            <HStack spacing={3}>
              <Box
                as="img"
                src={logoOnly}
                alt="Verve Solution Logo"
                w={{ base: 6, md: 8 }}
                h={{ base: 6, md: 8 }}
              />
              <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold">
                Verve Solution India
              </Text>
            </HStack>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.300" fontWeight="medium">
              Growing with New Entrepreneurs
            </Text>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.300" maxW={{ base: '280px', md: '320px' }} lineHeight="relaxed">
              Making business registration and compliance simple and affordable for startups and small businesses.
            </Text>
          </VStack>
          
          <VStack align={{ base: 'center', lg: 'start' }} spacing={3} flex={1} textAlign={{ base: 'center', lg: 'left' }}>
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" mb={1}>
              Quick Links
            </Text>
            <VStack spacing={2} align={{ base: 'center', lg: 'start' }}>
              <Link as={RouterLink} to="/" fontSize={{ base: 'xs', md: 'sm' }} color="gray.300" _hover={{ color: 'primary.300' }}>
                Home
              </Link>
              <Link as={RouterLink} to="/services" fontSize={{ base: 'xs', md: 'sm' }} color="gray.300" _hover={{ color: 'primary.300' }}>
                Services
              </Link>
              <Link as={RouterLink} to="/about" fontSize={{ base: 'xs', md: 'sm' }} color="gray.300" _hover={{ color: 'primary.300' }}>
                About Us
              </Link>
              <Link as={RouterLink} to="/contact" fontSize={{ base: 'xs', md: 'sm' }} color="gray.300" _hover={{ color: 'primary.300' }}>
                Contact
              </Link>
            </VStack>
          </VStack>
          
          <VStack align={{ base: 'center', lg: 'start' }} spacing={3} flex={1} textAlign={{ base: 'center', lg: 'left' }}>
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" mb={1}>
              Contact Info
            </Text>
            <VStack spacing={2} align={{ base: 'center', lg: 'start' }}>
              <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.300">
                info@vervesolution.in
              </Text>
              <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.300">
                +91 98765 43210
              </Text>
              <VStack align={{ base: 'center', lg: 'start' }} spacing={1}>
                <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.300">
                  Office No. 301, Business Hub
                </Text>
                <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.300">
                  Mumbai, Maharashtra 400001, India
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </Stack>
        
        <Divider my={{ base: 6, md: 8 }} borderColor="gray.600" />
        
        <Stack 
          justify={{ base: 'center', md: 'space-between' }} 
          align="center" 
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 0 }}
          textAlign="center"
        >
          <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.400">
            © 2024 Verve Solution India. All rights reserved.
          </Text>
          <HStack spacing={{ base: 6, md: 4 }} flexWrap="wrap" justify="center">
            <Link href="#" fontSize={{ base: 'xs', md: 'sm' }} color="gray.400" _hover={{ color: 'primary.300' }}>
              Privacy Policy
            </Link>
            <Link href="#" fontSize={{ base: 'xs', md: 'sm' }} color="gray.400" _hover={{ color: 'primary.300' }}>
              Terms of Service
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}