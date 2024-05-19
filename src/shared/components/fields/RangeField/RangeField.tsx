'use client'

import { UseControllerProps } from 'react-hook-form'
import { Box, Slider, Typography } from '@mui/material'

import { useFormField } from '~/shared/services/form'

export interface RangeFieldProps {
  name: UseControllerProps['name']
  min?: number
  max?: number
}

export const RangeField = ({ min = 0, max = 100, name }: RangeFieldProps) => {
  const { onChange, value = 0 } = useFormField<number>({
    name,
  })

  const marks = [{ value: min }, { value: max }]

  return (
    <Box>
      <Slider
        marks={marks}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          onClick={() => onChange(min)}
          sx={{ cursor: 'pointer' }}
        >
          {min}
        </Typography>

        <Typography
          variant="body2"
          onClick={() => onChange(max)}
          sx={{ cursor: 'pointer' }}
        >
          {max}
        </Typography>
      </Box>
    </Box>
  )
}
