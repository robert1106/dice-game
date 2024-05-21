'use client'

import { memo } from 'react'
import { TableCell, TableRow } from '@mui/material'

import { ConfigColumnType } from '~/shared/components/base'

import { ColumnType } from '../../lib/types'

export interface TableRowBodyProps<TColumnType> {
  configColumns: ConfigColumnType<TColumnType>[]
}

const TableRowHead = <TColumnType extends ColumnType>({
  configColumns,
}: TableRowBodyProps<TColumnType>) => {
  return (
    <TableRow>
      {configColumns.map(({ title, type }) => (
        <TableCell key={type}>{title}</TableCell>
      ))}
    </TableRow>
  )
}

export const TableRowHeadWithMemo = memo(TableRowHead) as typeof TableRowHead
