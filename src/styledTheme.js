import { extendTheme } from '@chakra-ui/react';

import cores from './assets/cores';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

const styledTheme = extendTheme({
  breakpoints,
  components: {
    Form: {
      variants: {
        floatingBlue: {
          container: {
            marginBottom: '20px',
            input: {
              fontSize: 'md',
              fontWeight: 'medium',
              borderWidth: 1.5,
              letterSpacing: '1.5px',
              borderColor: cores.spanishGray,
              borderRadius: '10px',
              backgroundColor: cores.periwinkleCrayola,
              _placeholder: {
                color: cores.spanishGray,
                fontSize: 'sm',
                fontWeight: 'light',
                letterSpacing: '0px',
              },
              _focusWithin: {
                borderWidth: 2,
                borderColor: cores.liberty,
              },
              _hover: {
                borderWidth: 2,
                borderColor: cores.liberty,
              }
            },
            _focusWithin: {
              label: {
                ...activeLabelStyles,
                width: 'auto',
                color: cores.liberty,
                fontWeight: 'bold',
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
            label: {
              color: cores.spanishGray,
              fontSize: 'md',
              fontWeight: 'medium',
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: cores.periwinkleCrayola,
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
        floating: {
          container: {
            marginBottom: '20px',
            input: {
              fontSize: 'md',
              fontWeight: 'medium',
              borderWidth: 1.5,
              letterSpacing: '1.5px',
              borderColor: cores.spanishGray,
              borderRadius: '10px',
              _placeholder: {
                color: cores.spanishGray,
                fontSize: 'sm',
                fontWeight: 'light',
                letterSpacing: '0px',
              },
              _focusWithin: {
                borderWidth: 2,
                borderColor: cores.liberty,
              },
              _hover: {
                borderWidth: 2,
                borderColor: cores.liberty,
              }
            },
            _focusWithin: {
              label: {
                ...activeLabelStyles,
                width: 'auto',
                color: cores.liberty,
                fontWeight: 'bold',
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
            label: {
              color: cores.spanishGray,
              fontSize: 'md',
              fontWeight: 'medium',
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: cores.cultured,
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
    Button: {
      variants: {
        sidebar: {
          w: '100%',
          py: '30px',
          bg: 'transparent',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 15,
          borderEndRadius: '0',
          color: 'white',
          fontWeight: '500',
          _hover: {
            bg: cores.hanBlue,
          },
        },
        sidebarAtiva: {
          w: '100%',
          py: '30px',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 15,
          borderEndRadius: '0',
          color: cores.liberty,
          bg: cores.maximumBluePurple,
          fontWeight: '600',
        },
        giftCard: {
          w: '100%',
          bg: 'white',
          align: 'center',
          justify: 'center',
          py: '10',
          borderRadius: '16px',
          borderWidth: '1px',
          borderColor: cores.periwinkleCrayola,
          _hover: {
            borderColor: cores.maximumBluePurple,
            bg: cores.lavenderWeb,
          },
          _active: {
            borderColor: cores.maximumBluePurple,
            bg: cores.lavenderBlue,
          },
        },
      },
    },
    Text: {
      variants: {
        tituloSidebar: {
          fontSize: 14,
          fontWeight: '500',
          ms: '16px',
          mb: '10px',
          mt: '16px',
          color: cores.orchidCrayola,
        },
        botaoSidebar: {
          fontSize: 14,
          ms: '25px',
        },
      },
    },
  },
});

export default styledTheme;
