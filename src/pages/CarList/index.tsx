import React, { useEffect, useState } from 'react'
import { CarListStyled, CarListContainer } from './styles'
import { Card } from '../../components'

import { api } from '../../services/api'

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

  const renderProductListOrMessage = () => {
    if (cars.length === 0) {
      return <h2>No products</h2>
    }
    return cars.map((car) => <Card key={car.id} carName={car.name} carModel={car.model} carPrice={car.price} pathImage={car.urlImage} />)
  }

  useEffect(() => {
    api
      .get('/car')
      .then((response) => {
        setCars((state) => response.data)
        console.log(response.data)
      })
      .catch((err) => console.log(err))
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
