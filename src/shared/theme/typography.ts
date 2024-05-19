import { TypographyOptions } from '@mui/material/styles/createTypography'

import { interFont } from './fonts'

export const typography: TypographyOptions = {
  fontFamily: interFont.style.fontFamily,
  h1: {
    fontWeight: 400,
    fontSize: 100,
  },
  body1: {
    fontWeight: 400,
    fontSize: 32,
  },
  body2: {
    fontWeight: 400,
    fontSize: 18,
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: 16,
  },
}
