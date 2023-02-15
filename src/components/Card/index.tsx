import { AiOutlineThunderbolt } from 'react-icons/ai'

import { CardStyled } from './styles'

interface CardProps {
  carModel: string
  carPrice: number
  carName: string
  pathImage: any
}

const Card: React.FC<CardProps> = ({ carModel, carName, carPrice, pathImage }) => {
  return (
    <CardStyled data-testid="car-card">
      <img src={pathImage} alt="" />
      <div className="div-line">
        <div className="father">
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
      </div>
    </CardStyled>
  )
}

export default Card
