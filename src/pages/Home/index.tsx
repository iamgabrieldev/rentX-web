import { NavLink } from 'react-router-dom'

import { H1, HomeContainer } from './styles'
import { Button } from '../../components'

import CarPng from '../../assets/car-img.png'
import LogoSvg from '../../assets/Logotipo.png'

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <div>
        <img src={LogoSvg} alt="" />
        <H1>
          Alugue um <br />
          carro de maneira <br />
          simples e fácil!
        </H1>
        <p>Vários modelos para você dirigir seguro, com conforto e segurança</p>
        <NavLink to="/app/listagem">
          <Button>Começar agora</Button>
        </NavLink>
      </div>
      <div>
        <img src={CarPng} />
      </div>
    </HomeContainer>
  )
}

export default Home
