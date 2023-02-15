import { MdAltRoute, MdAvTimer, MdCarRepair, MdKeyboardArrowLeft, MdOutlineWaterDrop, MdPersonOutline, MdUpload } from 'react-icons/md'
import { Container, IconContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { Button, Navigation } from '../../components'
import { Carousel } from 'antd'

import CarImg from '../../assets/car-home.png'

const CarUnique: React.FC = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <Container>
        <header>
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
        </header>
        <main>
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
          <section>
            <div className="container">
              <IconContainer>
                <MdAvTimer />
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
                <span>5pessoas</span>
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
          </section>
        </main>
      </Container>
    </>
  )
}

export default CarUnique
