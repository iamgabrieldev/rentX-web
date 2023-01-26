import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './context/ThemeContext'

// router
import AppRouter from './routes/Router'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <GlobalStyles />
        <AppRouter />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
