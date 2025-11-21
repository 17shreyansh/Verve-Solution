import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Card,
  CardBody,
  Icon,
  Badge,
  Button,
} from '@chakra-ui/react';
import { FiAward, FiUsers, FiGlobe, FiClock, FiTrendingUp, FiShield } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import ServiceCategory from '../components/ServiceCategory';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ParallaxSection from '../components/ParallaxSection';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Solutions',
    testimonial: 'Verve Solution helped us navigate complex international tax requirements seamlessly. Their expertise saved us significant time and resources.',
  },
  {
    name: 'Michael Chen',
    company: 'Global Enterprises Ltd',
    testimonial: 'Outstanding service quality and attention to detail. The team at Verve Solution truly understands the needs of growing businesses.',
  },
  {
    name: 'Emma Williams',
    company: 'Innovation Corp',
    testimonial: 'Professional, reliable, and knowledgeable. Verve Solution has been instrumental in our company\'s financial compliance and growth strategy.',
  },
];

export default function Home() {
  return (
    <Box>
      <HeroBanner />
      <ServiceCategory />
      
      {/* Why Choose Us Section */}
      <Box py={{ base: 20, md: 28 }} bg="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" position="relative">
        <ParallaxSection speed={-0.2}>
          <Box
            position="absolute"
            top="10%"
            right="10%"
            w="200px"
            h="200px"
            bg="primary.100"
            borderRadius="full"
            opacity="0.3"
            filter="blur(40px)"
          />
        </ParallaxSection>
        
        <Container maxW="7xl" position="relative">
          <VStack spacing={16} textAlign="center">
            <VStack spacing={6}>
              <Badge 
                colorScheme="teal" 
                px={4} 
                py={2} 
                borderRadius="full" 
                fontSize="sm"
                bg="primary.50"
                color="primary.700"
              >
                Why Choose Us
              </Badge>
              <Heading 
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} 
                color="text.primary"
                fontWeight="800"
                letterSpacing="tight"
              >
                Trusted by Industry Leaders
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="text.secondary" maxW="700px" lineHeight="tall">
                We combine deep industry expertise with innovative solutions to deliver exceptional value. 
                Our track record speaks for itself.
              </Text>
            </VStack>
            
            {/* Statistics Grid */}
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              <Card variant="elevated" bg="white" textAlign="center">
                <CardBody p={8}>
                  <VStack spacing={4}>
                    <Box p={4} bg="primary.50" borderRadius="full">
                      <Icon as={FiClock} boxSize={8} color="primary.500" />
                    </Box>
                    <VStack spacing={1}>
                      <AnimatedCounter end={10} suffix="+" />
                      <Text color="text.primary" fontSize="lg" fontWeight="semibold">Years Experience</Text>
                      <Text fontSize="sm" color="text.secondary">
                        Decade of proven expertise
                      </Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
              
              <Card variant="elevated" bg="white" textAlign="center">
                <CardBody p={8}>
                  <VStack spacing={4}>
                    <Box p={4} bg="blue.50" borderRadius="full">
                      <Icon as={FiUsers} boxSize={8} color="blue.500" />
                    </Box>
                    <VStack spacing={1}>
                      <AnimatedCounter end={500} suffix="+" />
                      <Text color="text.primary" fontSize="lg" fontWeight="semibold">Global Clients</Text>
                      <Text fontSize="sm" color="text.secondary">
                        Across 15+ countries
                      </Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
              
              <Card variant="elevated" bg="white" textAlign="center">
                <CardBody p={8}>
                  <VStack spacing={4}>
                    <Box p={4} bg="green.50" borderRadius="full">
                      <Icon as={FiTrendingUp} boxSize={8} color="green.500" />
                    </Box>
                    <VStack spacing={1}>
                      <AnimatedCounter end={98} suffix="%" />
                      <Text color="text.primary" fontSize="lg" fontWeight="semibold">Success Rate</Text>
                      <Text fontSize="sm" color="text.secondary">
                        Client satisfaction
                      </Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
              
              <Card variant="elevated" bg="white" textAlign="center">
                <CardBody p={8}>
                  <VStack spacing={4}>
                    <Box p={4} bg="purple.50" borderRadius="full">
                      <Icon as={FiShield} boxSize={8} color="purple.500" />
                    </Box>
                    <VStack spacing={1}>
                      <Text fontSize="3xl" fontWeight="bold" color="purple.500">24/7</Text>
                      <Text color="text.primary" fontSize="lg" fontWeight="semibold">Support</Text>
                      <Text fontSize="sm" color="text.secondary">
                        Always available
                      </Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
            
            {/* Value Propositions */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" pt={8}>
              <VStack spacing={4} textAlign="center">
                <Icon as={FiAward} boxSize={12} color="primary.500" />
                <Heading size="md" color="text.primary">Industry Recognition</Heading>
                <Text fontSize="sm" color="text.secondary" textAlign="center">
                  Award-winning team recognized for excellence in financial advisory services
                </Text>
              </VStack>
              
              <VStack spacing={4} textAlign="center">
                <Icon as={FiGlobe} boxSize={12} color="primary.500" />
                <Heading size="md" color="text.primary">Global Expertise</Heading>
                <Text fontSize="sm" color="text.secondary" textAlign="center">
                  Deep understanding of international markets and regulatory frameworks
                </Text>
              </VStack>
              
              <VStack spacing={4} textAlign="center">
                <Icon as={FiShield} boxSize={12} color="primary.500" />
                <Heading size="md" color="text.primary">Trusted Partnership</Heading>
                <Text fontSize="sm" color="text.secondary" textAlign="center">
                  Long-term relationships built on trust, transparency, and results
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
      
      {/* About Us Summary */}
      <Box py={{ base: 20, md: 28 }} bg="white" position="relative">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
            <VStack align="start" spacing={8}>
              <VStack align="start" spacing={4}>
                <Badge 
                  colorScheme="teal" 
                  px={4} 
                  py={2} 
                  borderRadius="full" 
                  fontSize="sm"
                  bg="primary.50"
                  color="primary.700"
                >
                  About Us
                </Badge>
                <Heading 
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} 
                  color="text.primary"
                  fontWeight="800"
                  letterSpacing="tight"
                  lineHeight="shorter"
                >
                  Transforming Businesses Through{' '}
                  <Text as="span" bgGradient="linear(to-r, primary.500, primary.700)" bgClip="text">
                    Strategic Intelligence
                  </Text>
                </Heading>
              </VStack>
              
              <VStack align="start" spacing={6}>
                <Box p={6} bg="primary.50" borderRadius="xl" borderLeft="4px solid" borderColor="primary.500">
                  <Text fontSize="lg" color="text.primary" fontWeight="semibold" mb={2}>
                    Our Mission
                  </Text>
                  <Text color="text.secondary" lineHeight="tall">
                    Transforming businesses through clarity, compliance and strategic intelligence. 
                    We empower organizations to navigate complex financial landscapes with confidence.
                  </Text>
                </Box>
                
                <Text fontSize="lg" color="text.secondary" lineHeight="tall">
                  As a leading global consulting firm, we specialize in corporate finance, taxation, and advisory services. 
                  Our experienced team is dedicated to helping businesses achieve sustainable growth through innovative solutions.
                </Text>
                
                <HStack spacing={8} pt={4}>
                  <VStack align="start" spacing={2}>
                    <Text fontSize="2xl" fontWeight="bold" color="primary.500">15+</Text>
                    <Text fontSize="sm" color="text.secondary">Countries Served</Text>
                  </VStack>
                  <VStack align="start" spacing={2}>
                    <Text fontSize="2xl" fontWeight="bold" color="primary.500">50+</Text>
                    <Text fontSize="sm" color="text.secondary">Expert Consultants</Text>
                  </VStack>
                  <VStack align="start" spacing={2}>
                    <Text fontSize="2xl" fontWeight="bold" color="primary.500">99%</Text>
                    <Text fontSize="sm" color="text.secondary">Client Retention</Text>
                  </VStack>
                </HStack>
              </VStack>
              
              <HStack spacing={4}>
                <Button
                  as={RouterLink}
                  to="/about"
                  size="lg"
                  variant="solid"
                >
                  Learn More About Us
                </Button>
                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  variant="outline"
                >
                  Get in Touch
                </Button>
              </HStack>
            </VStack>
            
            <Box position="relative">
              <Card variant="elevated" bg="white" overflow="hidden">
                <CardBody p={0}>
                  <Box
                    bg="linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)"
                    h="500px"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <VStack spacing={6}>
                      <Icon as={FiUsers} boxSize={16} color="primary.300" />
                      <VStack spacing={2}>
                        <Text fontSize="xl" fontWeight="bold" color="text.primary">
                          Expert Team
                        </Text>
                        <Text fontSize="md" color="text.secondary" textAlign="center">
                          Professional consultants<br />working for your success
                        </Text>
                      </VStack>
                    </VStack>
                    
                    {/* Floating Achievement Cards */}
                    <Box
                      position="absolute"
                      top="6"
                      right="6"
                      bg="white"
                      p={4}
                      borderRadius="lg"
                      boxShadow="lg"
                      border="1px solid"
                      borderColor="border.light"
                    >
                      <HStack spacing={3}>
                        <Icon as={FiAward} color="primary.500" />
                        <VStack align="start" spacing={0}>
                          <Text fontSize="sm" fontWeight="semibold">Industry Leader</Text>
                          <Text fontSize="xs" color="text.secondary">Since 2014</Text>
                        </VStack>
                      </HStack>
                    </Box>
                    
                    <Box
                      position="absolute"
                      bottom="6"
                      left="6"
                      bg="primary.500"
                      color="white"
                      p={4}
                      borderRadius="lg"
                      boxShadow="lg"
                    >
                      <HStack spacing={3}>
                        <Icon as={FiGlobe} />
                        <VStack align="start" spacing={0}>
                          <Text fontSize="sm" fontWeight="semibold">Global Reach</Text>
                          <Text fontSize="xs" opacity={0.9}>Worldwide Service</Text>
                        </VStack>
                      </HStack>
                    </Box>
                  </Box>
                </CardBody>
              </Card>
              
              {/* Background Decorations */}
              <Box
                position="absolute"
                top="-6"
                left="-6"
                w="24"
                h="24"
                bg="primary.100"
                borderRadius="full"
                zIndex="-1"
                opacity="0.6"
              />
              <Box
                position="absolute"
                bottom="-8"
                right="-8"
                w="20"
                h="20"
                bg="accent.gold"
                borderRadius="full"
                zIndex="-1"
                opacity="0.4"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      
      {/* Testimonials */}
      <Box pt={{ base: 20, md: 28 }} pb={0} bg="gray.50" position="relative">
        <ParallaxSection speed={0.3}>
          <Box
            position="absolute"
            bottom="10%"
            left="5%"
            w="150px"
            h="150px"
            bg="primary.200"
            borderRadius="full"
            opacity="0.2"
            filter="blur(30px)"
          />
        </ParallaxSection>
        
        <Container maxW="7xl" position="relative">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center">
              <Badge 
                colorScheme="teal" 
                px={4} 
                py={2} 
                borderRadius="full" 
                fontSize="sm"
                bg="primary.50"
                color="primary.700"
              >
                Client Success Stories
              </Badge>
              <Heading 
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} 
                color="text.primary"
                fontWeight="800"
                letterSpacing="tight"
              >
                Trusted by Industry Leaders
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="text.secondary" maxW="700px" lineHeight="tall">
                Discover how we've helped businesses across the globe achieve their financial objectives 
                and drive sustainable growth through our expert guidance.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </SimpleGrid>
            
            <VStack spacing={6} textAlign="center" pt={8}>
              <Text fontSize="lg" color="text.secondary" maxW="600px">
                Join hundreds of satisfied clients who have transformed their business operations with our expertise.
              </Text>
              <HStack spacing={4}>
                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  variant="solid"
                >
                  Start Your Success Story
                </Button>
                <Button
                  as={RouterLink}
                  to="/about"
                  size="lg"
                  variant="outline"
                >
                  View Case Studies
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}