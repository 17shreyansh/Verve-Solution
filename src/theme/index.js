import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#f0f9f7',
      100: '#d6f0eb',
      200: '#ade0d6',
      300: '#7cc9bd',
      400: '#4db0a1',
      500: '#2BB6A3',
      600: '#239b88',
      700: '#1d7f6f',
      800: '#186559',
      900: '#155349',
    },
    secondary: {
      50: '#f7fafc',
      100: '#edf2f7',
      200: '#e2e8f0',
      300: '#cbd5e0',
      400: '#a0aec0',
      500: '#718096',
      600: '#4a5568',
      700: '#2d3748',
      800: '#1a202c',
      900: '#171923',
    },
    text: {
      primary: '#1E2A38',
      secondary: '#7A8A99',
      dark: '#0D1A26',
      light: '#FFFFFF',
    },
    bg: {
      primary: '#F7F9FB',
      surface: '#FFFFFF',
      dark: '#1E2A38',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    border: {
      light: '#E1E8F0',
      medium: '#CBD5E0',
    },
    accent: {
      gold: '#F6AD55',
      blue: '#4299E1',
      green: '#48BB78',
      red: '#F56565',
    }
  },
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Lato", sans-serif',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        _focus: {
          boxShadow: '0 0 0 3px rgba(43,182,163,0.3)',
        },
      },
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'white',
          boxShadow: '0 4px 12px rgba(43,182,163,0.3)',
          _hover: {
            bg: 'primary.600',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(43,182,163,0.4)',
            _disabled: {
              bg: 'primary.500',
              transform: 'none',
            },
          },
          _active: {
            transform: 'translateY(0px)',
          },
        },
        outline: {
          border: '2px solid',
          borderColor: 'primary.500',
          color: 'primary.500',
          _hover: {
            bg: 'primary.500',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(43,182,163,0.3)',
          },
        },
        ghost: {
          color: 'primary.500',
          _hover: {
            bg: 'primary.50',
            color: 'primary.600',
          },
        },
      },
      sizes: {
        lg: {
          h: '12',
          px: '8',
          fontSize: 'lg',
        },
      },
    },
    Heading: {
      baseStyle: {
        color: 'text.primary',
        fontWeight: 'bold',
      },
    },
    Text: {
      baseStyle: {
        color: 'text.primary',
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'bg.surface',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          borderRadius: '12px',
          border: '1px solid',
          borderColor: 'border.light',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          _hover: {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            borderColor: 'primary.200',
          },
        },
      },
      variants: {
        elevated: {
          container: {
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            _hover: {
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            },
          },
        },
        gradient: {
          container: {
            background: 'linear-gradient(135deg, rgba(43,182,163,0.05) 0%, rgba(43,182,163,0.1) 100%)',
            borderColor: 'primary.200',
          },
        },
      },
    },
  },
  styles: {
    global: {
      '*': {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: 'bg.primary',
        color: 'text.primary',
        fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      '::selection': {
        bg: 'primary.100',
        color: 'primary.800',
      },
    },
  },
  shadows: {
    outline: '0 0 0 3px rgba(43,182,163,0.3)',
    lg: '0 10px 30px rgba(0,0,0,0.1)',
    xl: '0 20px 40px rgba(0,0,0,0.15)',
    '2xl': '0 30px 60px rgba(0,0,0,0.2)',
  },
});

export default theme;