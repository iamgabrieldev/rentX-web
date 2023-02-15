import React, { useEffect, useState } from 'react'
import { CarListContainer, CarListStyled, EmptyContainer } from './styles'
import { Card } from '../../components'

import { api } from '../../services/api'

import EmptySvg from '../../assets/empty.svg'

interface CarsProps {
  id: number
  name: string
  model: string
  price: number
  urlImage: string
  icon: string
}

const CarList: React.FC = () => {
  const [cars, setCars] = useState<CarsProps[]>([])
  const [loading, setLoading] = useState(false)

  const renderProductListOrMessage = () => {
    if (cars.length === 0) {
      return (
        <EmptyContainer>
          <h2>😬 Sem carros disponíveis</h2>
          <div>
            <img src={EmptySvg} alt="" />
          </div>
        </EmptyContainer>
      )
    }

    return cars.map((car) => <Card key={car.id} carName={car.name} carModel={car.model} carPrice={car.price} pathImage={car.urlImage} />)
  }

  useEffect(() => {
    api
      .get('/car')
      .then((response) => {
        setCars((state) => response.data)
        console.log(response.data)
        console.log(loading)
      })
      .catch((err) => { console.log(err) });
  }, [])

  return (
    <CarListStyled>
      <main>
        <div>
          <h1>Carros disponíveis</h1>
          <span>Total 12 de carros</span>
        </div>
      </main>
      <CarListContainer>{renderProductListOrMessage()}</CarListContainer>
    </CarListStyled>
  )
}

export default CarList
