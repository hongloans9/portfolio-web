import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#e6fffa',
      100: '#b2f5ea',
      200: '#81e6d9',
      300: '#4fd1c5',
      400: '#38b2ac',
      500: '#319795',
      600: '#2c7a7b',
      700: '#285e61',
      800: '#234e52',
      900: '#1d4044',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
    mono: `'JetBrains Mono', monospace`,
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0d1117' : '#ffffff',
        color: props.colorMode === 'dark' ? '#c9d1d9' : '#24292f',
      },
      '::selection': {
        bg: 'brand.400',
        color: 'white',
      },
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        bg: props.colorMode === 'dark' ? '#0d1117' : '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        bg: props.colorMode === 'dark' ? '#30363d' : '#c1c1c1',
        borderRadius: '4px',
      },
      html: {
        scrollBehavior: 'smooth',
      },
    }),
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.400',
          color: 'white',
          _hover: { bg: 'brand.500', transform: 'translateY(-2px)', boxShadow: 'lg' },
          transition: 'all 0.2s',
        },
        outline: {
          borderColor: 'brand.400',
          color: 'brand.400',
          _hover: { bg: 'brand.400', color: 'white', transform: 'translateY(-2px)' },
          transition: 'all 0.2s',
        },
      },
    },
  },
})

export default theme
