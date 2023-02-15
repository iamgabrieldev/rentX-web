import { NavLink } from 'react-router-dom'
import { Carousel } from 'antd'
import { MdAltRoute, MdAvTimer, MdCarRepair, MdKeyboardArrowLeft, MdOutlineWaterDrop, MdPersonOutline, MdUpload } from 'react-icons/md'

import { Container, IconContainer, InfoContainer, HeaderContainer, ContentContainer } from './styles'
import { Button, Navigation } from '../../components'

import CarImg from '../../assets/car-home.png'

const CarUnique: React.FC = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <Container>
        <HeaderContainer>
          <NavLink to="/app/listagem">
            <MdKeyboardArrowLeft size={36} />
          </NavLink>
          <div>
            <p>Audi</p>
            <h2>Q3 Baita Foda </h2>
          </div>
          <div>
            <p>Ao dia</p>
            <h2 className="price">R$120</h2>
          </div>
        </HeaderContainer>
        <ContentContainer>
          <Carousel dotPosition="bottom" dots={true} autoplay>
            <div>
              <img src={CarImg} alt="" />
            </div>
            <div>
              <img src={CarImg} alt="" />
            </div>
            <div>
              <img src={CarImg} alt="" />
            </div>
          </Carousel>
          <InfoContainer>
            <div className="container">
              <IconContainer>
                <MdAvTimer size={24} />
                <span>
                  <p>270km/h</p>
                </span>
              </IconContainer>
              <IconContainer>
                <MdUpload />
                <span>
                  <p>6.8s</p>
                </span>
              </IconContainer>
              <IconContainer>
                <MdOutlineWaterDrop />
                <span>
                  <p>Gasolina</p>
                </span>
              </IconContainer>
              <IconContainer>
                <MdAltRoute />
                <span>
                  <p>Auto</p>
                </span>
              </IconContainer>
              <IconContainer>
                <MdPersonOutline />
                <span>5 pessoas</span>
              </IconContainer>
              <IconContainer>
                <MdCarRepair />
                <span>
                  <p>280HP</p>
                </span>
              </IconContainer>
            </div>
            <div>
              <Button>Escolher período de aluguel</Button>
            </div>
          </InfoContainer>
        </ContentContainer>
      </Container>
    </>
  )
}

export default CarUnique
