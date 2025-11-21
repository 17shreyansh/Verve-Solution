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
    title: 'Corporate Finance & Advisory',
    description: 'Strategic financial guidance and advisory services to help businesses make informed decisions and optimize their financial performance.',
    subServices: [
      'Business Valuation',
      'Due Diligence',
      'Internal Audit',
      'Internal Financial Control (IFC)',
      'Business Transfer Advisory',
      'Slump Sale',
      'Liquidation',
    ],
  },
  {
    title: 'Accounting, Tax & Compliance',
    description: 'Comprehensive accounting, taxation, and regulatory compliance solutions designed to keep your business compliant and financially optimized.',
    subServices: [
      'Accounting & Bookkeeping',
      'Payroll & Labour Compliance',
      'Goods & Services Tax (GST)',
      'Tax Deduction at Source (TDS)',
      'TDS on outward remittances',
      'TDS on properties for NRIs',
      'International Taxation',
      'Transfer Pricing Advisory & Study',
      'Equilization Levy',
      'Taxation of Expatriates',
      'Tax Residency Certificate (TRC)',
    ],
  },
  {
    title: 'Business Setup & Secretarial Services',
    description: 'Complete business incorporation and ongoing secretarial services to establish and maintain your business operations efficiently.',
    subServices: [
      'Company Secretarial Services',
      'Business Incorporation',
      'Regulatory Registrations',
      'Trademark Registration',
      'Startup Registration',
      'LLP Registration Services',
      'Entry India Strategies',
    ],
  },
  {
    title: 'Specialized Services',
    description: 'Advanced financial services and expert opinions tailored to meet specific business requirements and strategic objectives.',
    subServices: [
      'Virtual CFO Services',
      'CMA Data & Projections',
      'Opinion on Direct Tax Matters',
      'Opinion on Indirect Tax Matters',
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
              Comprehensive financial and advisory services designed to drive your business forward. 
              We provide world-class solutions across corporate finance, taxation, compliance, and strategic advisory.
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