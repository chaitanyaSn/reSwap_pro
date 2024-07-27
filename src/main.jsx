import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { BookProvider } from './context/context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BookProvider>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </BookProvider>
)
