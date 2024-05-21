'use client'

import { useMemo } from 'react'

import { Table as MuiTable, TableBody, TableHead } from '@mui/material'

import { TableRowBody } from './components/TableRowBody'
import { TableRowHead } from './components/TableRowHead'
import {
  ColumnType,
  ConfigColumnType,
  ItemType,
  RenderItemType,
} from './lib/types'

interface TableProps<TItem, TColumnType> {
  configColumns: ConfigColumnType<TColumnType>[]
  items: TItem[]
  renderItem: RenderItemType<TItem, TColumnType>
}

export const Table = <TItem extends ItemType, TColumnType extends ColumnType>({
  configColumns: config,
  items,
  renderItem: render,
}: TableProps<TItem, TColumnType>) => {
  const configColumns = useMemo(() => config, [config])
  const renderItem = useMemo(() => render, [JSON.stringify(render)])

  return (
    <MuiTable>
      <TableHead>
        <TableRowHead configColumns={configColumns} />
      </TableHead>

      <TableBody>
        {items.map((item, index) => (
          <TableRowBody
            key={item.id}
            item={item}
            configColumns={configColumns}
            renderItem={renderItem}
          />
        ))}
      </TableBody>
    </MuiTable>
  )
}
