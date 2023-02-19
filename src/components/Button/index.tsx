import React, { type ButtonHTMLAttributes } from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string
}

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonStyled {...props} className={props.variant} />
}

export default Button
