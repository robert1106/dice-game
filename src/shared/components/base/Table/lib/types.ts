export interface ItemType {
  id: string
}

export type ColumnType = keyof Record<string, string>

export interface ConfigColumnType<TColumnType> {
  title: string
  type: TColumnType
}

export type RenderItemType<TItem, TColumnType> = (
  item: TItem,
  type: TColumnType,
  index: number,
) => React.ReactNode
