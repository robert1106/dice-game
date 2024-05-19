'use client'

import { Typography, TypographyProps } from '@mui/material'

interface TextCellProps extends TypographyProps {
  text: string | number
}

export const TextCell = ({ text, ...rest }: TextCellProps) => {
  return (
    <Typography variant="body2" {...rest}>
      {text}
    </Typography>
  )
}
