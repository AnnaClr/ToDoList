import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App/index'
import { ResetStyled } from './styles/reset'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      <ResetStyled/>
  </React.StrictMode>,
)