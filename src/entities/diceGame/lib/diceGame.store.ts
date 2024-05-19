import { createStore } from 'zustand/vanilla'
import uniqid from 'uniqid'
import dayjs from 'dayjs'

import { DiceGameFormValue, ResultItem } from '../model'
import { generateSequence, getStatusResult } from './utils'
import { STATUS_TYPE } from './constants'

export type DiceGameState = {
  count: number
  rangeMin: number
  rangeMax: number
  resultsGame: ResultItem[]
}

export type DiceGameActions = {
  addResultGame: (value: DiceGameFormValue) => STATUS_TYPE
  generateCount: () => Promise<void>
}

export type DiceGameStore = DiceGameState & DiceGameActions

export const defaultInitState: DiceGameState = {
  count: 100,
  rangeMin: 0,
  rangeMax: 100,
  resultsGame: [],
}

export const initDiceGameStore = (): DiceGameState => {
  return defaultInitState
}

export const createDiceGameStore = (
  initState: DiceGameState = defaultInitState,
) => {
  return createStore<DiceGameStore>()((set, get) => ({
    ...initState,
    addResultGame: ({ placement, range }) => {
      let status = STATUS_TYPE.won

      set((state) => {
        status = getStatusResult({
          placement,
          range,
          result: state.count,
        })

        const newResult: ResultItem = {
          id: uniqid(),
          result: state.count,
          date: dayjs().toString(),
          status,
          range,
          placement,
        }

        const resultsGame = [newResult, ...state.resultsGame].slice(0, 10)

        return { resultsGame }
      })

      return status
    },
    generateCount: async () => {
      const { rangeMin, rangeMax } = get()
      const generator = generateSequence(rangeMin, rangeMax)

      for await (const value of generator) {
        set({ count: value })
      }
    },
  }))
}
