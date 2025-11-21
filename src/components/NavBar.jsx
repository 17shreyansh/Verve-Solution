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
import logoWithTitle from '../assets/logo with title.png';

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
      px={2}
      py={1}
      rounded={'md'}
      color={isActive ? 'primary.500' : 'text.primary'}
      fontWeight={isActive ? 'semibold' : 'normal'}
      _hover={{
        textDecoration: 'none',
        color: 'primary.500',
      }}
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
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box as={RouterLink} to="/" _hover={{ opacity: 0.8 }}>
            <Box
              as="img"
              src={logoWithTitle}
              alt="Verve Solution Logo"
              h={12}
            />
          </Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.name} path={link.path}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <HStack spacing={3} display={{ base: 'none', md: 'flex' }}>
            <Button
              as={RouterLink}
              to="/services"
              variant="ghost"
              size="sm"
            >
              Our Services
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              variant="solid"
              size="sm"
            >
              Get Consultation
            </Button>
          </HStack>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <Container maxW="7xl">
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
              <HStack spacing={3}>
                <Button
                  as={RouterLink}
                  to="/services"
                  variant="ghost"
                  size="sm"
                  width="fit-content"
                >
                  Our Services
                </Button>
                <Button
                  as={RouterLink}
                  to="/contact"
                  variant="solid"
                  size="sm"
                  width="fit-content"
                >
                  Get Consultation
                </Button>
              </HStack>
            </Stack>
          </Box>
        </Container>
      </Collapse>
    </Box>
  );
}