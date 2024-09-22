import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'

//import App from './App'
//import App from './App estado y boton.jsx'
//import App from './App ejemplo gato.jsx'
//import App from './App ejemplo gato sin boton.jsx'
//import App from './App con MUI.jsx'
import App from './App layout.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>,
)
