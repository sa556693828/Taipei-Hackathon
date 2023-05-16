// theme.ts
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const colors = {};

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        color: "",
        fontFamily: "",
      },
    }),
  },
  colors,
  config,
});

export default theme