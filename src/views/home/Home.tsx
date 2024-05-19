import { Stack } from '@mui/material'

import { DynamicNumberDisplay, ResultGameTable } from '~/entities/diceGame'
import { DiceGameForm } from '~/features/diceGame'

export const Home = () => {
  return (
    <Stack
      component="main"
      spacing={2}
      my={{ xs: '50px', md: '113px' }}
      px={{ md: 4, xs: 2 }}
    >
      <Stack spacing={2} sx={{ maxWidth: '320px', width: '100%' }}>
        <DynamicNumberDisplay />

        <DiceGameForm />
      </Stack>

      <ResultGameTable />
    </Stack>
  )
}
