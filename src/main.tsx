import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StyledThemeProvider } from './styles/StyledThemeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledThemeProvider>
      <App />
    </StyledThemeProvider>
  </React.StrictMode>,
)
