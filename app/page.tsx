import { GameStoreProvider } from '~/app/providers/GameStoreProvider'
import { Home } from '~/views/home'

export default function Page() {
  return (
    <GameStoreProvider>
      <Home />
    </GameStoreProvider>
  )
}
