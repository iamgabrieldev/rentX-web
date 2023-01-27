import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './context/ThemeContext'
import Router from './routes/Router'
import GlobalStyles from './styles/globalStyles'
import { ConfigProvider } from 'antd'

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#DC1637',
            },
          }}
        >
          <Router />
        </ConfigProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App
