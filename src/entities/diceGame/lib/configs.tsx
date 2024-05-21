import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

import { ConfigColumnType, TextCell } from '~/shared/components/base'

import { RESULT_COLUMNS_TYPES, STATUS_TYPE } from './constants'
import { ResultItem } from '../model'

dayjs.extend(LocalizedFormat)

export const configTableColumns: ConfigColumnType<RESULT_COLUMNS_TYPES>[] = [
  { title: 'Time', type: RESULT_COLUMNS_TYPES.time },
  { title: 'Guess', type: RESULT_COLUMNS_TYPES.guess },
  { title: 'Result ', type: RESULT_COLUMNS_TYPES.result },
]

export const getConfigResultItem = ({
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
