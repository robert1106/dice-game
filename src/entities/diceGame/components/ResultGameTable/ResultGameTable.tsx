'use client'

import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { Box } from '@mui/material'

import { useGameStore } from '~/app/providers/GameStoreProvider'
import { Table, TextCell } from '~/shared/components/base'

import { RESULT_COLUMNS_TYPES, STATUS_TYPE } from '../../lib/constants'
import { configTableColumns } from '../../lib/configs'
import { ResultItem } from '../../model'
import { EmptyState } from '../EmptyState'

dayjs.extend(LocalizedFormat)

const getConfigResultItem = ({
  date,
  range,
  placement,
  result,
  status,
}: ResultItem) => {
  const color = status === STATUS_TYPE.won ? 'green' : 'red'
  const normalizedDate = dayjs(date).format('HH:mm:ss')

  return {
    [RESULT_COLUMNS_TYPES.time]: <TextCell text={normalizedDate} />,
    [RESULT_COLUMNS_TYPES.guess]: <TextCell text={`${placement} ${range}`} />,
    [RESULT_COLUMNS_TYPES.result]: <TextCell text={result} color={color} />,
  }
}

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
