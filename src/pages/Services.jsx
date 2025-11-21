import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  {
    title: 'Accounts Payable & Receivable',
    description: 'Professional management of your business payments and collections to maintain healthy cash flow and financial stability.',
    subServices: [
      'Accounts Payable Management',
      'Accounts Receivable Management',
      'Invoice Processing',
      'Payment Processing',
      'Vendor Management',
      'Customer Collections',
      'Aging Reports',
    ],
  },
  {
    title: 'Bookkeeping & Expense Tracking',
    description: 'Accurate bookkeeping and comprehensive expense tracking services to keep your financial records organized and up-to-date.',
    subServices: [
      'Daily Bookkeeping',
      'Expense Tracking',
      'Receipt Management',
      'Bank Reconciliation',
      'Financial Record Keeping',
      'Transaction Categorization',
      'Monthly Financial Reports',
    ],
  },
  {
    title: 'Payroll & BAS Services',
    description: 'Complete payroll management and Business Activity Statement preparation to ensure compliance and accurate reporting.',
    subServices: [
      'Single Touch Payroll',
      'Payroll Processing',
      'Employee Pay Slips',
      'BAS Preparation',
      'Superannuation Management',
      'PAYG Withholding',
      'Payroll Tax Compliance',
    ],
  },
  {
    title: 'Cash Flow & Cloud Solutions',
    description: 'Advanced cash flow management and modern cloud-based accounting solutions for efficient business operations.',
    subServices: [
      'Cash Flow Management',
      'Cash Flow Forecasting',
      'Cloud Based Accounting',
      'Real-time Financial Reporting',
      'Budget Planning',
      'Financial Analysis',
      'Business Performance Metrics',
    ],
  },
];

export default function Services() {
  return (
    <Box py={{ base: 16, md: 20 }} bg="bg.primary" minH="100vh">
      <Container maxW="7xl">
        <VStack spacing={12}>
          <VStack spacing={6} textAlign="center">
            <Heading fontSize={{ base: '3xl', md: '4xl' }} color="text.primary">
              Our Services
            </Heading>
            <Text fontSize="lg" color="text.secondary" maxW="800px" lineHeight="tall">
              Professional accounting and bookkeeping services designed for small to medium businesses. 
              We provide comprehensive financial management solutions to keep your business organized and compliant.
            </Text>
          </VStack>
          
          <Box w="full">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                subServices={service.subServices}
              />
            ))}
          </Box>
          
          <Box bg="bg.surface" p={8} borderRadius="lg" w="full" textAlign="center">
            <VStack spacing={4}>
              <Heading size="lg" color="text.primary">
                Need a Custom Solution?
              </Heading>
              <Text color="text.secondary" maxW="600px">
                Every business is unique. If you don't see exactly what you're looking for, 
                our team can create a tailored solution that meets your specific requirements.
              </Text>
              <Text fontSize="lg" fontWeight="semibold" color="primary.500">
                Contact us to discuss your needs
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}