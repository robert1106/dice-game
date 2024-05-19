import { Stack, Typography } from '@mui/material'

export const EmptyState = () => {
  return (
    <Stack flex={1} alignItems="center" justifyContent="center">
      <Typography>Empty state</Typography>

      <Typography variant="subtitle1">Please start playing</Typography>
    </Stack>
  )
}
