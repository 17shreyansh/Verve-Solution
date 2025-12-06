import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Text,
  Collapse,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logoOnly from '../assets/logo only.png';

const Links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const NavLink = ({ children, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  
  return (
    <Link
      as={RouterLink}
      to={path}
      px={{ base: 0, md: 2 }}
      py={1}
      rounded={'md'}
      color={isActive ? 'primary.500' : 'text.primary'}
      fontWeight={isActive ? 'semibold' : 'normal'}
      fontSize={{ base: 'md', md: 'sm' }}
      _hover={{
        textDecoration: 'none',
        color: 'primary.500',
      }}
      display="block"
      w="full"
    >
      {children}
    </Link>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box 
      bg={scrolled ? 'rgba(255,255,255,0.95)' : 'bg.surface'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      position="sticky" 
      top={0} 
      zIndex={1000} 
      boxShadow={scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'}
      transition="all 0.3s ease"
      borderBottom={scrolled ? '1px solid' : 'none'}
      borderColor="border.light"
    >
      <Container maxW="7xl">
        <Flex h={{ base: 14, md: 16 }} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={{ base: 4, md: 8 }} alignItems={'center'}>
          <HStack as={RouterLink} to="/" _hover={{ opacity: 0.8 }} spacing={3}>
            <Box
              as="img"
              src={logoOnly}
              alt="Verve Solution Logo"
              h={{ base: 8, md: 10 }}
              w={{ base: 8, md: 10 }}
            />
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="600" color="text.primary" fontFamily="Poppins" letterSpacing="tight">
              Verve Solution
            </Text>
          </HStack>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.name} path={link.path}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <HStack spacing={{ base: 2, md: 3 }} display={{ base: 'none', md: 'flex' }}>
            <Button
              as={RouterLink}
              to="/services"
              variant="ghost"
              size={{ base: "xs", md: "sm" }}
            >
              Our Services
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              variant="solid"
              size={{ base: "xs", md: "sm" }}
            >
              Get Consultation
            </Button>
          </HStack>
          <IconButton
            size={{ base: 'sm', md: 'md' }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          />
        </Flex>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <Box 
          pb={4} 
          pt={2} 
          display={{ md: 'none' }} 
          bg="white" 
          borderTop="1px solid" 
          borderColor="border.light"
          w="100vw"
          ml="calc(-50vw + 50%)"
          px={4}
        >
          <Stack as={'nav'} spacing={3}>
            {Links.map((link) => (
              <Box key={link.name} py={2} px={4} borderRadius="md" _hover={{ bg: "gray.50" }}>
                <NavLink path={link.path}>
                  {link.name}
                </NavLink>
              </Box>
            ))}
            <Box pt={3} borderTop="1px solid" borderColor="border.light">
              <Stack spacing={3}>
                <Button
                  as={RouterLink}
                  to="/services"
                  variant="ghost"
                  size="md"
                  width="full"
                  justifyContent="flex-start"
                >
                  Our Services
                </Button>
                <Button
                  as={RouterLink}
                  to="/contact"
                  variant="solid"
                  size="md"
                  width="full"
                >
                  Get Consultation
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}