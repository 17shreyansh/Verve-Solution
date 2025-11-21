import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Avatar,
  Card,
  CardBody,
} from '@chakra-ui/react';
import Timeline from '../components/Timeline';

const teamMembers = [
  {
    name: 'CA Rajesh Gupta',
    position: 'Managing Director',
    description: 'Chartered Accountant with 18+ years experience in Indian taxation and GST compliance.',
  },
  {
    name: 'CS Priya Sharma',
    position: 'Head of Compliance',
    description: 'Company Secretary specializing in ROC compliance and corporate law matters.',
  },
  {
    name: 'CA Amit Kumar',
    position: 'Senior Tax Consultant',
    description: 'Expert in GST, income tax, and TDS compliance for Indian businesses.',
  },
  {
    name: 'Neha Patel',
    position: 'Director of Operations',
    description: 'MBA with focus on business operations and client relationship management.',
  },
];

export default function About() {
  return (
    <Box py={{ base: 16, md: 20 }} bg="bg.primary" minH="100vh">
      <Container maxW="7xl">
        <VStack spacing={16}>
          {/* Header */}
          <VStack spacing={6} textAlign="center">
            <Heading fontSize={{ base: '3xl', md: '4xl' }} color="text.primary">
              About Verve Solution India
            </Heading>
            <Text fontSize="lg" color="text.secondary" maxW="800px" lineHeight="tall">
              India's trusted business services partner dedicated to simplifying compliance, 
              taxation, and business registration for entrepreneurs and growing companies.
            </Text>
          </VStack>
          
          {/* Who We Are */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
            <VStack align="start" spacing={6}>
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color="text.primary">
                Who We Are
              </Heading>
              <Text color="text.secondary" lineHeight="tall">
                Verve Solution India is a leading business services firm established to serve the growing 
                needs of Indian entrepreneurs and businesses. We specialize in GST compliance, company 
                registration, taxation, and comprehensive business advisory services.
              </Text>
              <Text color="text.secondary" lineHeight="tall">
                Our team of qualified Chartered Accountants and Company Secretaries brings together 
                extensive experience in Indian business regulations, tax laws, and compliance requirements. 
                We pride ourselves on making complex Indian business processes simple and accessible.
              </Text>
            </VStack>
            
            <Box>
              <Box
                bg="gray.100"
                h="350px"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="gray.500"
              >
                <Text fontSize="lg" textAlign="center">
                  Professional Office<br />
                  Image Placeholder
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
          
          {/* Mission & Vision */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            <Card>
              <CardBody p={8}>
                <VStack align="start" spacing={4}>
                  <Heading size="lg" color="text.primary">
                    Our Mission
                  </Heading>
                  <Text color="text.secondary" lineHeight="tall">
                    Simplifying Indian business compliance and empowering entrepreneurs to focus on growth. 
                    We help businesses navigate GST, taxation, and regulatory requirements with confidence, 
                    ensuring full compliance while supporting their business objectives.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody p={8}>
                <VStack align="start" spacing={4}>
                  <Heading size="lg" color="text.primary">
                    Our Vision
                  </Heading>
                  <Text color="text.secondary" lineHeight="tall">
                    To be India's most trusted business services partner, known for our expertise in 
                    compliance, taxation, and business registration. We envision empowering every Indian 
                    entrepreneur with accessible, reliable, and expert business services to achieve their dreams.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
          
          {/* Leadership Team */}
          <VStack spacing={8} w="full">
            <VStack spacing={4} textAlign="center">
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color="text.primary">
                Leadership Team
              </Heading>
              <Text fontSize="lg" color="text.secondary" maxW="600px">
                Meet the experienced professionals who lead our commitment to excellence
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
              {teamMembers.map((member, index) => (
                <Card key={index} textAlign="center">
                  <CardBody p={6}>
                    <VStack spacing={4}>
                      <Avatar size="xl" name={member.name} bg="primary.500" />
                      <VStack spacing={1}>
                        <Heading size="md" color="text.primary">
                          {member.name}
                        </Heading>
                        <Text fontSize="sm" color="primary.500" fontWeight="semibold">
                          {member.position}
                        </Text>
                      </VStack>
                      <Text fontSize="sm" color="text.secondary" textAlign="center">
                        {member.description}
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
          
          {/* Company Journey */}
          <VStack spacing={8} w="full">
            <VStack spacing={4} textAlign="center">
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color="text.primary">
                Our Journey
              </Heading>
              <Text fontSize="lg" color="text.secondary" maxW="600px">
                A decade of growth, innovation, and unwavering commitment to client success
              </Text>
            </VStack>
            
            <Card w="full">
              <CardBody p={8}>
                <Timeline />
              </CardBody>
            </Card>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}