import { createTheme } from '@mui/material/styles'

import { breakpoints } from './breakpoints'
import { components } from './components'
import { typography } from './typography'
import { purple } from '@mui/material/colors'

export const theme = createTheme({
  spacing: 8,
  breakpoints,
  components,
  typography,
  palette: {
    primary: purple,
  },
})
