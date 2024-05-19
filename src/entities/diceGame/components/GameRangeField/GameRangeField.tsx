'use client'

import { RangeField, RangeFieldProps } from '~/shared/components/fields'
import { useGameStore } from '~/app/providers/GameStoreProvider'

export const GameRangeField = ({ name }: RangeFieldProps) => {
  const rangeMin = useGameStore((store) => store.rangeMin)
  const rangeMax = useGameStore((store) => store.rangeMax)

  return <RangeField name={name} min={rangeMin} max={rangeMax} />
}
