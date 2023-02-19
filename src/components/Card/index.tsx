import { AiOutlineThunderbolt } from 'react-icons/ai'

import { CardContainer, CardInfo } from './styles'
import { NavLink } from 'react-router-dom'

interface CardProps {
  carId: number
  carModel: string
  carPrice: string
  carName: string
  pathImage: any
}

const Card: React.FC<CardProps> = ({ carId, carModel, carName, carPrice, pathImage }) => {
  return (
    <NavLink to={`/app/listagem/${carId}`}>
      <CardContainer data-testid="car-card">
        <img data-testid="image" src={pathImage} alt="" />
        <CardInfo>
          <div className="attributes">
            <div>
              <p>{carModel}</p>
              <b>{carName}</b>
            </div>
            <div>
              <p>Ao dia</p>
              <strong>R${carPrice}</strong>
            </div>
            <AiOutlineThunderbolt />
          </div>
        </CardInfo>
      </CardContainer>
    </NavLink>
  )
}

export default Card
