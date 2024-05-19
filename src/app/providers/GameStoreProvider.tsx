'use client'

import { createContext, type ReactNode, useContext, useRef } from 'react'
import { type StoreApi, useStore } from 'zustand'

import {
  createDiceGameStore,
  DiceGameStore,
  initDiceGameStore,
} from '~/entities/diceGame'

export const GameStoreContext = createContext<StoreApi<DiceGameStore> | null>(
  null,
)

export interface GameStoreProviderProps {
  children: ReactNode
}

export const GameStoreProvider = ({ children }: GameStoreProviderProps) => {
  const storeRef = useRef<StoreApi<DiceGameStore>>()
  if (!storeRef.current) {
    storeRef.current = createDiceGameStore(initDiceGameStore())
  }

  return (
    <GameStoreContext.Provider value={storeRef.current}>
      {children}
    </GameStoreContext.Provider>
  )
}

export const useGameStore = <T,>(selector: (store: DiceGameStore) => T): T => {
  const gameStoreContext = useContext(GameStoreContext)

  if (!gameStoreContext) {
    throw new Error(`useGameStore must be use within GameStoreProvider`)
  }

  return useStore(gameStoreContext, selector)
}
