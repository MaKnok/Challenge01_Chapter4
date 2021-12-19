import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '375px',
  md: '768px',
  lg: '1440px',
  xl: '1900px',
  '2xl': '2500px',
})

export const theme = extendTheme({
  colors:{
    gray:{
      "600":"#47585B",
      "500":"#999999",
      "200":"#DADADA",
      "50":"#F5F8FA"
    },
    yellow:{
      "400":"#FFBA08"
    }
  },
  fonts: {
    heading:'Poppins',
    body: 'Poppins'
  },
  styles:{
    global:{
      body:{
        bg:'gray-50',
        color: 'gray-600'
      }
    }
  },
  breakpoints
})