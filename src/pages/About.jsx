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
    name: 'Rajesh Gupta',
    position: 'Founder & Director',
    description: 'Commerce graduate with 5+ years experience in business registration and GST compliance.',
  },
  {
    name: 'Priya Sharma',
    position: 'Compliance Manager',
    description: 'Experienced professional specializing in company registration and ROC filing services.',
  },
  {
    name: 'Amit Kumar',
    position: 'Tax Consultant',
    description: 'Qualified professional helping startups with GST registration and basic tax compliance.',
  },
  {
    name: 'Neha Patel',
    position: 'Client Relations',
    description: 'Dedicated to providing personalized support and guidance to new entrepreneurs.',
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
              A growing business services firm dedicated to helping new entrepreneurs start and 
              manage their businesses with affordable and reliable compliance solutions.
            </Text>
          </VStack>
          
          {/* Who We Are */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
            <VStack align="start" spacing={6}>
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color="text.primary">
                Who We Are
              </Heading>
              <Text color="text.secondary" lineHeight="tall">
                Verve Solution India is a dedicated business services firm established to help new entrepreneurs 
                navigate the complexities of starting and running a business in India. We focus on making 
                business registration, GST compliance, and basic accounting simple and affordable.
              </Text>
              <Text color="text.secondary" lineHeight="tall">
                Our team of experienced professionals is committed to providing personalized support to startups 
                and small businesses. We understand the challenges faced by new entrepreneurs and strive to 
                make business compliance as straightforward as possible.
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
                    Making business registration and compliance accessible and affordable for new entrepreneurs. 
                    We guide startups through the essential steps of business formation, GST registration, 
                    and basic compliance requirements with personalized support.
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
                    To become a trusted partner for new entrepreneurs across India, known for our affordable, 
                    reliable, and personalized business services. We aim to help every startup get the right 
                    foundation for their business journey.
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
                Meet the dedicated team committed to supporting new entrepreneurs
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
                Our journey of growth and commitment to helping new entrepreneurs succeed
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