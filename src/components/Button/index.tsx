import React, { type ButtonHTMLAttributes } from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>
}

export default Button
