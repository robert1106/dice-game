'use client'

import { Box } from '@mui/material'

import { useGameStore } from '~/app/providers/GameStoreProvider'
import { Table } from '~/shared/components/base'

import { configTableColumns, getConfigResultItem } from '../../lib/configs'
import { EmptyState } from '../EmptyState'

export const ResultGameTable = () => {
  const resultsGame = useGameStore((store) => store.resultsGame)

  if (!resultsGame.length) {
    return <EmptyState />
  }

  return (
    <Box sx={{ maxWidth: '600px', width: '100%' }}>
      <Table
        configColumns={configTableColumns}
        items={resultsGame}
        renderItem={(item, type) => {
          const configResultItem = getConfigResultItem(item)

          return configResultItem[type]
        }}
      />
    </Box>
  )
}
