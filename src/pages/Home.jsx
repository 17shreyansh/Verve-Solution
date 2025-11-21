import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroBanner from '../components/HeroBanner';
import ServiceShowcase from '../components/ServiceShowcase';
import ServiceCategory from '../components/ServiceCategory';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUsSection from '../components/AboutUsSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <Box>
      <HeroBanner />
      <ServiceShowcase />
      <ServiceCategory />
      <WhyChooseUs />
      <AboutUsSection />
      <TestimonialsSection />
    </Box>
  );
}