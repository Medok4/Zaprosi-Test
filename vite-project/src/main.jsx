import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BattleField from './BattleField/BattleField'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BattleField/>
  </StrictMode>,
)
