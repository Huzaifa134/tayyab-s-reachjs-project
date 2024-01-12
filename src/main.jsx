import React from 'react'
import ReactDOM from 'react-dom'
import './static/css/index.css'
import App from './App'
import { AuthProvider } from './context/auth.jsx'

ReactDOM.render(
  <AuthProvider>
      <App />
  </AuthProvider>,
  document.getElementById('root')
)
