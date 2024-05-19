'use client'

import { Paper, Typography } from '@mui/material'

import { useGameStore } from '~/app/providers/GameStoreProvider'

export const DynamicNumberDisplay = () => {
  const count = useGameStore((store) => store.count)

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
      }}
    >
      <Typography variant="h1">{count}</Typography>
    </Paper>
  )
}
