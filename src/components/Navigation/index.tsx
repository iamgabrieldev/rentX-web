import UnionSvg from '../../assets/svg/Union.svg'
import HomeSvg from '../../assets/svg/Home.svg'
import CarSvg from '../../assets/svg/Car.svg'
import UserSvg from '../../assets/svg/User.svg'

import { Aside } from './styles'
import { NavLink } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <Aside>
      <header>
        <img src={UnionSvg} alt="" />
      </header>
      <main>
        <NavLink to="/app/listagem">
          <div>
            <img src={HomeSvg} alt="" />
          </div>
        </NavLink>
        <NavLink to="/app/filtro">
          <div>
            <img src={CarSvg} alt="" />
          </div>
        </NavLink>
        <NavLink to="/app/login">
          <div>
            <img src={UserSvg} alt="" />
          </div>
        </NavLink>
      </main>
    </Aside>
  )
}

export default Navigation
