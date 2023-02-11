import { Outlet } from 'react-router-dom'
import { Header, Navigation } from '../components'

const DefaultLayout: React.FC = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '5rem' }}>
          <Header title="Início" />
        </div>
        <Navigation />
      </div>
      <div style={{ marginLeft: '5rem' }}>
        <Outlet />
      </div>
    </>
  )
}

export default DefaultLayout
