import React from 'react'
import ReactDOM from 'react-dom/client'
import Hangman from './hangmangame.jsx'
import './hangmanstyle.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hangman />
  </React.StrictMode>,
)
