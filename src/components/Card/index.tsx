import { AiOutlineThunderbolt } from 'react-icons/ai'

import { CardStyled } from './styles'

interface CardProps {
  id: number
  model: string
  price: number
  name: string
  urlImage: any
  icon: string
}

const Card: React.FC<CardProps> = (car) => {
  return (
    <CardStyled>
      <img src={car.urlImage} alt="" />
      <div className="div-line">
        <div className="father">
          <div>
            <p>{car.model}</p>
            <b>{car.name}</b>
          </div>
          <div>
            <p>Ao dia</p>
            <strong>R${car.price}</strong>
          </div>
          <AiOutlineThunderbolt />
        </div>
      </div>
    </CardStyled>
  )
}

export default Card
