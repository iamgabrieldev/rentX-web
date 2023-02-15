import { Outlet } from 'react-router-dom'

import { NavigationContainer, OutletContainer } from './styles'
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
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  )
}

export default DefaultLayout
