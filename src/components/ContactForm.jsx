import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast,
  Card,
  CardBody,
  Heading,
} from '@chakra-ui/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message sent successfully!',
        description: 'We will get back to you within 24 hours.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card>
      <CardBody p={8}>
        <VStack spacing={6} align="stretch">
          <Heading size="lg" color="text.primary" textAlign="center">
            Get in Touch
          </Heading>
          
          <Box as="form" onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel color="text.primary">Full Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  bg="bg.surface"
                  borderColor="border.light"
                  _focus={{ borderColor: 'primary.500' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="text.primary">Email Address</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  bg="bg.surface"
                  borderColor="border.light"
                  _focus={{ borderColor: 'primary.500' }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="text.primary">Phone Number</FormLabel>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  bg="bg.surface"
                  borderColor="border.light"
                  _focus={{ borderColor: 'primary.500' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="text.primary">Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  bg="bg.surface"
                  borderColor="border.light"
                  _focus={{ borderColor: 'primary.500' }}
                />
              </FormControl>

              <Button
                type="submit"
                size="lg"
                width="full"
                isLoading={isLoading}
                loadingText="Sending..."
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  );
}