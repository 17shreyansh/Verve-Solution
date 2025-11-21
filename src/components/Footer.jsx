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
    <Box bg="text.primary" color="white" mt={0}>
      <Container as={Stack} maxW={'6xl'} py={10} m={0}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
          <VStack align="start" spacing={4} flex={1}>
            <HStack spacing={3}>
              <Box
                as="img"
                src={logoOnly}
                alt="Verve Solution Logo"
                w={8}
                h={8}
              />
              <Text fontSize="lg" fontWeight="bold">
                Verve Solution Pty Ltd
              </Text>
            </HStack>
            <Text fontSize="sm" color="gray.300">
              Financial Precision. Global Perspective.
            </Text>
            <Text fontSize="sm" color="gray.300" maxW="300px">
              Empowering businesses with seamless financial operations, compliance services, and international growth strategies.
            </Text>
          </VStack>
          
          <VStack align="start" spacing={4} flex={1}>
            <Text fontSize="md" fontWeight="semibold">
              Quick Links
            </Text>
            <Link as={RouterLink} to="/" fontSize="sm" color="gray.300" _hover={{ color: 'primary.300' }}>
              Home
            </Link>
            <Link as={RouterLink} to="/services" fontSize="sm" color="gray.300" _hover={{ color: 'primary.300' }}>
              Services
            </Link>
            <Link as={RouterLink} to="/about" fontSize="sm" color="gray.300" _hover={{ color: 'primary.300' }}>
              About Us
            </Link>
            <Link as={RouterLink} to="/contact" fontSize="sm" color="gray.300" _hover={{ color: 'primary.300' }}>
              Contact
            </Link>
          </VStack>
          
          <VStack align="start" spacing={4} flex={1}>
            <Text fontSize="md" fontWeight="semibold">
              Contact Info
            </Text>
            <Text fontSize="sm" color="gray.300">
              Email: info@vervesolution.com.au
            </Text>
            <Text fontSize="sm" color="gray.300">
              Phone: +61 (0) 2 1234 5678
            </Text>
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color="gray.300">
                Address: Level 10, 123 Collins Street
              </Text>
              <Text fontSize="sm" color="gray.300">
                Melbourne, VIC 3000, Australia
              </Text>
            </VStack>
          </VStack>
        </Stack>
        
        <Divider my={6} borderColor="gray.600" />
        
        <Stack justify="space-between" align="center" direction={{ base: 'column', md: 'row' }}>
          <Text fontSize="sm" color="gray.400">
            © 2024 Verve Solution Pty Ltd. All rights reserved.
          </Text>
          <HStack spacing={4}>
            <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: 'primary.300' }}>
              Privacy Policy
            </Link>
            <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: 'primary.300' }}>
              Terms of Service
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}