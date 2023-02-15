import { fireEvent, render, screen } from '@testing-library/react'
import Card from './index'

const car = {
  id: 1,
  name: 'RS 5 Coupe',
  model: 'Audi',
  price: 150,
  urlImage: 'https://raw.githubusercontent.com/iamgabrieldev/rentX-images/main/Audi.png',
  icon: 'energy'
}

const renderCarCard = () => {
  render(<Card carName={car.name} carModel={car.model} carPrice={car.price} pathImage={car.urlImage} key={car.id} />)
}

describe('Card', () => {
  it('deve renderizar Card()', () => {
    renderCarCard()

    expect(screen.getByTestId('car-card')).toBeInTheDocument()
  });
})
