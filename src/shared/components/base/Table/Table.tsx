import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'

export interface ConfigColumnType<TColumnType> {
  title: string
  type: TColumnType
}

interface TableProps<TItem, TColumnType> {
  configColumns: ConfigColumnType<TColumnType>[]
  items: TItem[]
  renderItem: (item: TItem, type: TColumnType, index: number) => React.ReactNode
}

export const Table = <
  TItem extends { id: string },
  TColumnType extends keyof Record<string, string>,
>({
  configColumns,
  items,
  renderItem,
}: TableProps<TItem, TColumnType>) => {
  return (
    <MuiTable>
      <TableHead>
        <TableRow>
          {configColumns.map(({ title, type }) => (
            <TableCell key={type}>{title}</TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id} hover>
            {configColumns.map(({ type }, index) => (
              <TableCell key={`${item.id}-${type}`}>
                {renderItem(item, type, index)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  )
}
