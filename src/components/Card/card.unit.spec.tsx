import { screen, render } from '@testing-library/react'
import Card from './index'

const car = {
  id: 1,
  name: 'RS 5 Coupe',
  model: 'Audi',
  price: '150',
  urlImage: 'https://raw.githubusercontent.com/iamgabrieldev/rentX-images/main/Audi.png',
  icon: 'energy',
}

const renderCarCard = () => {
  render(<Card carName={car.name} carModel={car.model} carPrice={car.price} pathImage={car.urlImage} key={car.id} />)
}

describe('Card', () => {
  it('deve renderizar Card()', () => {
    renderCarCard()

    expect(screen.getByTestId('car-card')).toBeInTheDocument()
  })

  it('deve exibiir o contéudo adequado', () => {
    renderCarCard()

    expect(screen.getByText(new RegExp(car.name, 'i'))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(car.model, 'i'))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(car.price, 'i'))).toBeInTheDocument()
    expect(screen.getByTestId('image')).toHaveStyle({
      backgroundImage: car.urlImage,
    })
  })
})
