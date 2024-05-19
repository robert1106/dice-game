import { RESULT_COLUMNS_TYPES } from './constants'
import { ConfigColumnType } from '~/shared/components/base'

export const configTableColumns: ConfigColumnType<RESULT_COLUMNS_TYPES>[] = [
  { title: 'Time', type: RESULT_COLUMNS_TYPES.time },
  { title: 'Guess', type: RESULT_COLUMNS_TYPES.guess },
  { title: 'Result ', type: RESULT_COLUMNS_TYPES.result },
]
