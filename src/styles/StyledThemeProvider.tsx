import { ReactNode } from 'react'
import GlobalStyles from './globalStyles'
import { ThemeProvider } from 'styled-components'
import { dark } from './themes/dark'

interface StyledThemeProviderProps {
  children: ReactNode
}

export const StyledThemeProvider: React.FC<StyledThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
