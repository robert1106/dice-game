'use client'

import { memo } from 'react'
import { TableCell, TableRow } from '@mui/material'

import { ConfigColumnType } from '~/shared/components/base'

import { ColumnType, ItemType, RenderItemType } from '../../lib/types'

interface TableRowBodyProps<TItem, TColumnType> {
  configColumns: ConfigColumnType<TColumnType>[]
  item: TItem
  renderItem: RenderItemType<TItem, TColumnType>
}

const TableRowBody = <TItem extends ItemType, TColumnType extends ColumnType>({
  item,
  configColumns,
  renderItem,
}: TableRowBodyProps<TItem, TColumnType>) => {
  return (
    <TableRow>
      {configColumns.map(({ type }, index) => (
        <TableCell key={`${item.id}-${type}`}>
          {renderItem(item, type, index)}
        </TableCell>
      ))}
    </TableRow>
  )
}

export const TableRowBodyWithMemo = memo(TableRowBody) as typeof TableRowBody
