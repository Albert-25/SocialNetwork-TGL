import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <div className='container mx-auto sm:flex-col'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
