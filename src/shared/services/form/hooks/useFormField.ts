'use client'

import { ChangeEvent, useCallback } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

export const useFormField = <TValue>({ name }: UseControllerProps) => {
  const { field } = useController({
    name,
  })

  const onChange = useCallback(
    (value: ChangeEvent<HTMLInputElement> | unknown) => {
      field.onChange(value)
    },
    [field.onChange],
  )

  const value = field.value as TValue

  return { onChange, value }
}
