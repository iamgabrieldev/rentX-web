import React from 'react'
import { ButtonStyled } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>
}

export default Button
