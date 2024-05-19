import { POSITION_VARIANTS } from '~/entities/diceGame'
import { STATUS_TYPE } from '~/entities/diceGame/lib/constants'

const getCheckStatus = (range: number, result: number) => ({
  [POSITION_VARIANTS.under]: range > result,
  [POSITION_VARIANTS.over]: range < result,
})

export const getStatusResult = ({
  placement,
  range,
  result,
}: {
  placement: POSITION_VARIANTS
  range: number
  result: number
}): STATUS_TYPE => {
  const checkStatus = getCheckStatus(range, result)

  return checkStatus[placement] ? STATUS_TYPE.won : STATUS_TYPE.lost
}

export async function* generateSequence(min: number, max: number) {
  for (let i = 1; i <= 20; i++) {
    await new Promise((resolve) => setTimeout(resolve, i * i))

    yield Math.floor(Math.random() * (max + 1 - min)) + min
  }
}
