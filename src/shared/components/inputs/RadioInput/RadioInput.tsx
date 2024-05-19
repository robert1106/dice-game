'use client'

import { FormControlLabel, FormControlLabelProps, Radio } from '@mui/material'

export const RadioInput = (props: Omit<FormControlLabelProps, 'control'>) => {
  return <FormControlLabel {...props} control={<Radio />} />
}
