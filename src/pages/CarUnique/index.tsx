import { MdAltRoute, MdAvTimer, MdCarRepair, MdKeyboardArrowLeft, MdOutlineWaterDrop, MdPersonOutline, MdUpload } from 'react-icons/md'
import { Container, RowStyled, TabDatePicker } from './styles'
import { NavLink } from 'react-router-dom'
import { Button, Navigation } from '../../components'
import { Carousel, DatePicker, Tabs } from 'antd'

import CarImg from '../../assets/car-home.png'

const CarUnique: React.FC = () => {
  const formatList = ['DD/MM/YYYY', 'DD/MM/YY']

  const items = [1, 2].map((_, i) => {
    const id = String(i + 1)

    if (id !== '2') {
      return {
        label: `SOBRE O CARRO`,
        key: id,
        children: (
          <TabDatePicker>
            <p>
              Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta
              de acelerar.
            </p>
          </TabDatePicker>
        ),
      }
    }

    return {
      label: `PERÍODO`,
      key: id,
      children: (
        <TabDatePicker>
          <div>
            <DatePicker format={formatList} placeholder="De" />
            <DatePicker format={formatList} placeholder="Até" />
          </div>
          <hr />
          <div>
            <span>
              <label htmlFor="">Total</label>
              <p>R$580 x3 diárias</p>
            </span>
            <h2>R$ 2.900</h2>
          </div>
        </TabDatePicker>
      ),
    }
  })

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
              <RowStyled align="middle" style={{ display: 'flex', alignItems: 'center' }}>
                <MdAvTimer />
                <span>
                  <p>270km/h</p>
                </span>
              </RowStyled>
              <RowStyled>
                <MdUpload />
                <span>
                  <p>6.8s</p>
                </span>
              </RowStyled>
              <RowStyled>
                <MdOutlineWaterDrop />
                <span>
                  <p>Gasolina</p>
                </span>
              </RowStyled>
              <RowStyled>
                <MdAltRoute />
                <span>
                  <p>Auto</p>
                </span>
              </RowStyled>
              <RowStyled>
                <MdPersonOutline />
                <span>5pessoas</span>
              </RowStyled>
              <RowStyled>
                <MdCarRepair />
                <span>
                  <p>280HP</p>
                </span>
              </RowStyled>
            </div>
            <div>
              <div style={{ marginBottom: '4rem' }}>
                <Tabs size="small" type="line" moreIcon={false} items={items} />
              </div>
              <Button>Escolher período de aluguel</Button>
            </div>
          </section>
        </main>
      </Container>
    </>
  )
}

export default CarUnique
