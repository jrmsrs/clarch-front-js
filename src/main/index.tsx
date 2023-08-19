import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from '@/presentation'
import { reportWebVitals } from './vitals'
import './global.css'
import { makeBicicletas, makeBicicleta } from './factories/pages/bicicletas'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router
      makeBicicletas={makeBicicletas}
      makeBicicleta={makeBicicleta}
    />
  </React.StrictMode>
)

void reportWebVitals()
