import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from '@/presentation'
import { reportWebVitals } from './vitals'
import './global.css'
import { makeBicicletas } from './factories/pages/bicicletas/factory'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router makeBicicletas={makeBicicletas} />
  </React.StrictMode>
)

void reportWebVitals()
