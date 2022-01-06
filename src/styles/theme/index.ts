// theme.js
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {},
    }),
  },
})
export default theme;
