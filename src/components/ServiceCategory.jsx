import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  VStack,
  HStack,
  Badge,
  Button,
  Container,
} from '@chakra-ui/react';
import { FiTrendingUp, FiFileText, FiBriefcase, FiSettings, FiArrowRight } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

const services = [
  {
    title: 'GST & Tax Compliance',
    description: 'Complete GST registration, filing, and compliance services along with income tax planning and filing.',
    icon: FiFileText,
    features: ['GST Registration & Filing', 'Income Tax Returns', 'TDS Compliance'],
    color: 'green',
  },
  {
    title: 'Company Registration & ROC',
    description: 'Private Limited, LLP, and OPC registration with complete ROC compliance and annual filings.',
    icon: FiBriefcase,
    features: ['Pvt Ltd Registration', 'LLP Formation', 'ROC Compliance'],
    color: 'blue',
  },
  {
    title: 'Accounting & Bookkeeping',
    description: 'Professional accounting services, bookkeeping, payroll management, and financial reporting.',
    icon: FiTrendingUp,
    features: ['Monthly Accounting', 'Payroll Services', 'Financial Reports'],
    color: 'purple',
  },
  {
    title: 'Business Advisory',
    description: 'Strategic business consulting, loan assistance, trademark registration, and virtual CFO services.',
    icon: FiSettings,
    features: ['Business Loans', 'Trademark Filing', 'Virtual CFO'],
    color: 'orange',
  },
];

export default function ServiceCategory() {
  return (
    <Box py={{ base: 20, md: 28 }} bg="white" position="relative">
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.02"
        backgroundImage="radial-gradient(circle at 25% 25%, #2BB6A3 2px, transparent 2px)"
        backgroundSize="60px 60px"
      />
      
      <Container maxW="7xl" position="relative">
        <VStack spacing={12} textAlign="center" mb={16}>
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
              Our Expertise
            </Badge>
            <Heading 
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} 
              color="text.primary"
              fontWeight="800"
              letterSpacing="tight"
            >
  Affordable Business Solutions for Startups
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="text.secondary" maxW="700px" lineHeight="tall">
              From GST registration to company formation, we provide affordable and reliable business services 
              designed specifically for startups and small businesses in India.
            </Text>
          </VStack>
        </VStack>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={12}>
          {services.map((service, index) => (
            <Card 
              key={index} 
              h="full" 
              variant="elevated"
              bg="white"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                borderColor: `${service.color}.200`,
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
              transition="all 0.3s ease"
            >
              <CardBody p={8}>
                <VStack spacing={6} align="start" h="full">
                  <HStack justify="space-between" w="full">
                    <Box
                      p={4}
                      bg={`${service.color}.50`}
                      borderRadius="xl"
                      color={`${service.color}.500`}
                    >
                      <Icon as={service.icon} boxSize={8} />
                    </Box>
                    <Badge 
                      colorScheme={service.color} 
                      variant="subtle"
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      {service.features.length}+ Services
                    </Badge>
                  </HStack>
                  
                  <VStack align="start" spacing={3} flex={1}>
                    <Heading size="lg" color="text.primary" lineHeight="shorter">
                      {service.title}
                    </Heading>
                    <Text color="text.secondary" fontSize="md" lineHeight="tall">
                      {service.description}
                    </Text>
                    
                    <VStack align="start" spacing={2} pt={2}>
                      <Text fontSize="sm" fontWeight="semibold" color="text.primary">
                        Key Services:
                      </Text>
                      {service.features.map((feature, idx) => (
                        <HStack key={idx} spacing={2}>
                          <Box w={2} h={2} bg={`${service.color}.400`} borderRadius="full" />
                          <Text fontSize="sm" color="text.secondary">{feature}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                  
                  <Button
                    as={RouterLink}
                    to="/services"
                    variant="ghost"
                    colorScheme={service.color}
                    size="sm"
                    rightIcon={<FiArrowRight />}
                    w="full"
                    justifyContent="space-between"
                  >
                    Learn More
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
        
        <VStack spacing={6} textAlign="center">
          <Text fontSize="lg" color="text.secondary" maxW="600px">
            Need a custom solution? Our expert team can create tailored financial strategies 
            that align perfectly with your business objectives.
          </Text>
          <Button
            as={RouterLink}
            to="/contact"
            size="lg"
            variant="solid"
            px={8}
            rightIcon={<FiArrowRight />}
          >
            Discuss Your Needs
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}