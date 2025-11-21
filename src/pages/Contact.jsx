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
  Card,
  CardBody,
} from '@chakra-ui/react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email Us',
    details: ['info@vervesolution.com.au', 'support@vervesolution.com.au'],
  },
  {
    icon: FiPhone,
    title: 'Call Us',
    details: ['+61 (0) 2 1234 5678', '+61 (0) 2 1234 5679'],
  },
  {
    icon: FiMapPin,
    title: 'Visit Us',
    details: ['Level 10, 123 Collins Street', 'Melbourne, VIC 3000, Australia'],
  },
  {
    icon: FiClock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
  },
];

export default function Contact() {
  return (
    <Box py={{ base: 16, md: 20 }} bg="bg.primary" minH="100vh">
      <Container maxW="7xl">
        <VStack spacing={16}>
          {/* Header */}
          <VStack spacing={6} textAlign="center">
            <Heading fontSize={{ base: '3xl', md: '4xl' }} color="text.primary">
              Contact Us
            </Heading>
            <Text fontSize="lg" color="text.secondary" maxW="800px" lineHeight="tall">
              Ready to transform your business? Get in touch with our expert team to discuss 
              how we can help you achieve your financial and strategic objectives.
            </Text>
          </VStack>
          
          {/* Contact Information */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
            {contactInfo.map((info, index) => (
              <Card key={index} textAlign="center">
                <CardBody p={6}>
                  <VStack spacing={4}>
                    <Box
                      p={3}
                      bg="primary.50"
                      borderRadius="full"
                      color="primary.500"
                    >
                      <Icon as={info.icon} boxSize={6} />
                    </Box>
                    <VStack spacing={2}>
                      <Heading size="md" color="text.primary">
                        {info.title}
                      </Heading>
                      {info.details.map((detail, idx) => (
                        <Text key={idx} fontSize="sm" color="text.secondary">
                          {detail}
                        </Text>
                      ))}
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
          
          {/* Contact Form and Map */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="full">
            <ContactForm />
            
            <Card>
              <CardBody p={8}>
                <VStack spacing={6} align="stretch">
                  <Heading size="lg" color="text.primary" textAlign="center">
                    Find Us
                  </Heading>
                  
                  {/* Map Placeholder */}
                  <Box
                    bg="gray.100"
                    h="300px"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="gray.500"
                  >
                    <Text fontSize="lg" textAlign="center">
                      Interactive Map<br />
                      Placeholder
                    </Text>
                  </Box>
                  
                  <VStack spacing={4} align="start">
                    <Text fontSize="md" fontWeight="semibold" color="text.primary">
                      Office Location
                    </Text>
                    <Text fontSize="sm" color="text.secondary">
                      Our office is conveniently located in the heart of Melbourne's business district, 
                      easily accessible by public transport and with nearby parking facilities.
                    </Text>
                    <VStack align="start" spacing={1}>
                      <Text fontSize="sm" color="text.primary" fontWeight="semibold">
                        Address:
                      </Text>
                      <Text fontSize="sm" color="text.secondary">
                        Level 10, 123 Collins Street<br />
                        Melbourne, VIC 3000<br />
                        Australia
                      </Text>
                    </VStack>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
          
          {/* Additional Information */}
          <Card w="full">
            <CardBody p={8}>
              <VStack spacing={6} textAlign="center">
                <Heading size="lg" color="text.primary">
                  Ready to Get Started?
                </Heading>
                <Text color="text.secondary" maxW="600px" lineHeight="tall">
                  Whether you're looking for strategic financial advice, need help with compliance, 
                  or want to explore growth opportunities, our team is here to help. Contact us today 
                  to schedule a consultation and discover how Verve Solution can transform your business.
                </Text>
                <HStack spacing={8} justify="center" flexWrap="wrap">
                  <VStack spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="text.primary">
                      Response Time
                    </Text>
                    <Text fontSize="sm" color="text.secondary">
                      Within 24 hours
                    </Text>
                  </VStack>
                  <VStack spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="text.primary">
                      Consultation
                    </Text>
                    <Text fontSize="sm" color="text.secondary">
                      Free initial assessment
                    </Text>
                  </VStack>
                  <VStack spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="text.primary">
                      Languages
                    </Text>
                    <Text fontSize="sm" color="text.secondary">
                      English, Mandarin
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </Box>
  );
}