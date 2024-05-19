import { POSITION_VARIANTS, STATUS_TYPE } from '../lib/constants'

export interface ResultItem {
  id: string
  date: string
  range: number
  placement: POSITION_VARIANTS
  result: number
  status: STATUS_TYPE
}

export type DiceGameFormValue = Pick<ResultItem, 'placement' | 'range'>
