import React from 'react'
import ReactDOM from 'react-dom/client'
import Tictactoe from './tictactoegame.jsx'
import './tictactoestyle.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tictactoe />
  </React.StrictMode>,
)
