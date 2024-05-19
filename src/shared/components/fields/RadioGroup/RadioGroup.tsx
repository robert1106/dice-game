'use client'

import { UseControllerProps } from 'react-hook-form'

import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material'

import { RadioInput } from '~/shared/components/inputs'
import { useFormField } from '~/shared/services/form'

interface RadioGroupProps<TValue> extends MuiRadioGroupProps {
  name: UseControllerProps['name']
  options: { value: TValue; label: string }[]
}

export const RadioGroup = <TValue extends string>({
  name,
  options,
  ...rest
}: RadioGroupProps<TValue>) => {
  const { onChange, value = null } = useFormField<TValue>({
    name,
  })

  return (
    <MuiRadioGroup onChange={onChange} value={value} {...rest}>
      {options.map(({ value, label }) => (
        <RadioInput key={value} value={value} label={label} />
      ))}
    </MuiRadioGroup>
  )
}
