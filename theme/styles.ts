import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Inktrap, Triforce } from '../src/components/FontFamily';

export const styles = {
  global: (props: StyleFunctionProps) => ({
    fonts: {
      heading: Inktrap.style.fontFamily,
      body: Inktrap.style.fontFamily,
    },
    body: {
      bg: mode('#000000', '#000000')(props),
      color: mode('white', 'white')(props),
    },
    text: {
      //  marginTop: '0',
    },
  }),
};
