import { render, screen } from '@testing-library/react'
import Header from '.'

const title = 'início'

const renderHeader = (props: string) => {
  render(<Header title={props} />)
}

describe('Header', () => {
  it('deve renderizar o header', () => {
    renderHeader(title)

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('deve exibir o conteúdo adequado', () => {
    renderHeader(title)

    expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument()
  })
})
