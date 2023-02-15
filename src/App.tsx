import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
