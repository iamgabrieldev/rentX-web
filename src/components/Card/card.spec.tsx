import { screen, render, fireEvent } from '@testing-library/react'
import Card from './index'

const car = {
  id: 1,
  name: 'RS 5 Coupe',
  model: 'Audi',
  price: 150,
  urlImage: 'https://raw.githubusercontent.com/iamgabrieldev/rentX-images/main/Audi.png',
  icon: 'energy',
}

const renderCarCard = () => {
  render(<Card id={car.id} name={car.name} model={car.model} price={car.price} urlImage={car.urlImage} icon={car.icon} />)
}

describe('Card', () => {
  it('deve renderizar Card()', () => {
    renderCarCard()

    expect(screen.getByTestId('car-card')).toBeInTheDocument()
  })
})
