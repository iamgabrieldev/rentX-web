import { Col, Image } from 'antd'
import { H1, RowStyled } from './styles'
import { Button } from '../../components'
import LogoSvg from '../../assets/Logotipo.png'
import CarPng from '../../assets/car-img.png'
import { NavLink } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <RowStyled>
      <Col span={12}>
        <Image src={LogoSvg} preview={false} />
        <H1>
          Alugue um <br />
          carro de maneira <br />
          simples e fácil
        </H1>
        <p>Vários modelos para você dirigir seguro, com conforto e segurança</p>
        <NavLink to="/app/listagem">
          <Button>Começar agora</Button>
        </NavLink>
      </Col>
      <Col>
        <Image src={CarPng} preview={false} />
      </Col>
    </RowStyled>
  )
}

export default Home
