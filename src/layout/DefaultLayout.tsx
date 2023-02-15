import { Outlet } from 'react-router-dom'

import { NavigationContainer } from './styles'
import { Header, Navigation } from '../components'

const DefaultLayout: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <div>
          <Header title="Início" />
        </div>
        <Navigation />
      </NavigationContainer>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default DefaultLayout
