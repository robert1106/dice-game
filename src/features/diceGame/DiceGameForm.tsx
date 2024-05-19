'use client'

import { FormProvider } from 'react-hook-form'
import { Button, Stack } from '@mui/material'

import { GameRangeField } from '~/entities/diceGame'
import { RadioGroup } from '~/shared/components/fields'

import { useDiceGameForm } from './hooks/useDiceGameForm'
import { optionsPlacementSwitch } from './lib/options'

export const DiceGameForm = () => {
  const { methods, handleSubmit, isSubmitting } = useDiceGameForm()

  return (
    <FormProvider {...methods}>
      <Stack
        spacing={2}
        component="form"
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        <RadioGroup
          name="placement"
          options={optionsPlacementSwitch}
          sx={{ flexDirection: 'row', justifyContent: 'center' }}
        />

        <GameRangeField name="range" />

        <Button type="submit" disabled={isSubmitting}>
          Play
        </Button>
      </Stack>
    </FormProvider>
  )
}
