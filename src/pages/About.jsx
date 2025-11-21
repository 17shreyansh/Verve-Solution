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
    name: 'David Thompson',
    position: 'Managing Director',
    description: 'Over 15 years of experience in corporate finance and international taxation.',
  },
  {
    name: 'Sarah Mitchell',
    position: 'Head of Advisory Services',
    description: 'Specialist in business valuation and strategic financial planning.',
  },
  {
    name: 'James Wilson',
    position: 'Senior Tax Consultant',
    description: 'Expert in international tax compliance and transfer pricing.',
  },
  {
    name: 'Lisa Chen',
    position: 'Director of Operations',
    description: 'Focused on operational excellence and client service delivery.',
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
              About Verve Solution
            </Heading>
            <Text fontSize="lg" color="text.secondary" maxW="800px" lineHeight="tall">
              A leading global consulting firm dedicated to transforming businesses through 
              financial precision, strategic intelligence, and unwavering commitment to excellence.
            </Text>
          </VStack>
          
          {/* Who We Are */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
            <VStack align="start" spacing={6}>
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color="text.primary">
                Who We Are
              </Heading>
              <Text color="text.secondary" lineHeight="tall">
                Verve Solution Pty Ltd is a premier financial advisory and consulting firm established 
                to serve the evolving needs of businesses in an increasingly complex global marketplace. 
                We combine deep industry expertise with innovative solutions to deliver exceptional value to our clients.
              </Text>
              <Text color="text.secondary" lineHeight="tall">
                Our multidisciplinary team of professionals brings together decades of experience across 
                corporate finance, taxation, compliance, and strategic advisory services. We pride ourselves 
                on our ability to understand each client's unique challenges and provide tailored solutions 
                that drive sustainable growth.
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
                    Transforming businesses through clarity, compliance and strategic intelligence. 
                    We empower our clients to navigate complex financial landscapes with confidence, 
                    ensuring they achieve their strategic objectives while maintaining the highest 
                    standards of compliance and governance.
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
                    To be the globally recognized leader in financial advisory services, known for our 
                    unwavering commitment to excellence, innovation, and client success. We envision a 
                    future where businesses of all sizes can access world-class financial expertise 
                    to unlock their full potential.
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