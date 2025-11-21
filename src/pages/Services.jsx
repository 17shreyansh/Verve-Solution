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
    title: 'GST Registration & Compliance',
    description: 'Complete GST services from registration to monthly filing, ensuring full compliance with Indian GST regulations.',
    subServices: [
      'GST Registration',
      'Monthly GST Returns Filing',
      'GST Annual Returns',
      'Input Tax Credit Management',
      'GST Audit & Assessment',
      'E-way Bill Services',
      'GST Refund Processing',
    ],
  },
  {
    title: 'Income Tax & TDS Services',
    description: 'Comprehensive income tax planning, filing, and TDS compliance services for individuals and businesses.',
    subServices: [
      'Income Tax Return Filing',
      'Tax Planning & Advisory',
      'TDS Registration & Filing',
      'Advance Tax Calculation',
      'Tax Assessment Support',
      'Income Tax Notice Handling',
      'Tax Refund Processing',
    ],
  },
  {
    title: 'Company Registration & ROC Compliance',
    description: 'Complete business incorporation services and ongoing ROC compliance for all types of Indian companies.',
    subServices: [
      'Private Limited Company Registration',
      'LLP Registration',
      'One Person Company (OPC)',
      'Partnership Firm Registration',
      'ROC Annual Filing',
      'Director KYC & DIN',
      'Share Capital Management',
    ],
  },
  {
    title: 'Business Advisory & Support',
    description: 'Strategic business consulting, loan assistance, and specialized services for growing Indian businesses.',
    subServices: [
      'Business Loan Assistance',
      'Trademark Registration',
      'FSSAI License',
      'Import Export Code (IEC)',
      'Virtual CFO Services',
      'Financial Planning',
      'Compliance Calendar',
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
              Complete business solutions tailored for Indian entrepreneurs and growing companies. 
              We provide expert GST compliance, company registration, taxation, and business advisory services.
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