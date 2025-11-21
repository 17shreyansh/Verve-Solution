import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Badge,
} from '@chakra-ui/react';
import { FiDollarSign, FiFileText, FiUsers, FiCloud, FiBarChart, FiCreditCard, FiPieChart, FiTrendingUp } from 'react-icons/fi';

const showcaseServices = [
  {
    title: 'Accounts Payable & Receivable',
    icon: FiDollarSign,
    color: 'green',
  },
  {
    title: 'Bookkeeping',
    icon: FiFileText,
    color: 'blue',
  },
  {
    title: 'Expense Tracking',
    icon: FiCreditCard,
    color: 'purple',
  },
  {
    title: 'BAS',
    icon: FiBarChart,
    color: 'orange',
  },
  {
    title: 'Single Touch Payroll',
    icon: FiUsers,
    color: 'teal',
  },
  {
    title: 'Payroll',
    icon: FiTrendingUp,
    color: 'pink',
  },
  {
    title: 'Cash Flow Management',
    icon: FiPieChart,
    color: 'cyan',
  },
  {
    title: 'Cloud Based',
    icon: FiCloud,
    color: 'gray',
  },
];

export default function ServiceShowcase() {
  return (
    <Box py={{ base: 16, md: 20 }} bg="gray.50" position="relative">
      <Container maxW="7xl">
        <VStack spacing={12} textAlign="center">
          <VStack spacing={4}>
            <Badge 
              colorScheme="teal" 
              px={4} 
              py={2} 
              borderRadius="full" 
              fontSize="sm"
              bg="primary.50"
              color="primary.700"
            >
              Our Services
            </Badge>
            <Heading 
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
              color="text.primary"
              fontWeight="700"
            >
              Complete Accounting Solutions
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="text.secondary" maxW="600px">
              Professional accounting services designed to keep your business finances organized and compliant
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 2, md: 4, lg: 8 }} spacing={{ base: 6, md: 8 }} w="full">
            {showcaseServices.map((service, index) => (
              <VStack 
                key={index} 
                spacing={3} 
                p={{ base: 4, md: 6 }}
                bg="white"
                borderRadius="xl"
                boxShadow="sm"
                border="1px solid"
                borderColor="gray.100"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'lg',
                  borderColor: `${service.color}.200`,
                }}
                transition="all 0.3s ease"
                textAlign="center"
              >
                <Box
                  p={3}
                  bg={`${service.color}.50`}
                  borderRadius="full"
                  color={`${service.color}.500`}
                >
                  <Icon as={service.icon} boxSize={{ base: 6, md: 8 }} />
                </Box>
                <Text 
                  fontSize={{ base: 'xs', md: 'sm' }} 
                  fontWeight="semibold" 
                  color="text.primary"
                  textAlign="center"
                  lineHeight="short"
                >
                  {service.title}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}