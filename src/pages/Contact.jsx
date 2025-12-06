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
    details: ['info@vervesolutioncomau', 'support@vervesolutioncomau'],
  },
  {
    icon: FiClock,
    title: 'Business Hours',
    details: ['Monday - Friday: 10:00 AM - 7:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
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
              Ready to start your business journey in India? Get in touch with our friendly team 
              to discuss affordable GST registration, company formation, and basic compliance services.
            </Text>
          </VStack>
          
          {/* Contact Information */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
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
                      Get Directions
                    </Text>
                    <Text fontSize="sm" color="text.secondary">
                      Contact us via email for detailed location information and directions to our office.
                    </Text>
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
                  Whether you're starting your first business or need help with GST registration and basic compliance, 
                  our dedicated team is here to guide you. Contact us today for a free consultation and discover 
                  how we can make your business journey smoother.
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
                      Hindi, English, Gujarati
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