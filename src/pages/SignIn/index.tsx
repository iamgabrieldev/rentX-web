import React from 'react'

import { AiOutlineMail } from 'react-icons/ai'

import { GiPadlock } from 'react-icons/gi'

import { FormContainer, FormItem, SignInContainer, SignInInfoContainer, SignInTitle } from './styles'

import SignInImg from '../../assets/car-login.png'
import { Button } from '../../components'

const SignIn: React.FC = () => {
  return (
    <SignInContainer>
      <img src={SignInImg} alt="" />
      <SignInInfoContainer>
        <SignInTitle>
          <h2>Estamos quase lá.</h2>
          <p>Faça seu login para começar uma experiência incrivel</p>
        </SignInTitle>

        <FormContainer>
          <FormItem>
            <label htmlFor="email">
              <AiOutlineMail />
            </label>
            <input name="email" type="email" placeholder="E-mail" required />
          </FormItem>
          <FormItem>
            <label htmlFor="password">
              <GiPadlock />
            </label>
            <input name="password" type="password" placeholder="Senha" required />
          </FormItem>
          <p>Esqueci minha senha</p>
          <Button variant="teste" type="submit" disabled={true}>
            Login
          </Button>
          <Button variant="secondary" type="submit">
            Criar conta gratuita
          </Button>
        </FormContainer>
      </SignInInfoContainer>
    </SignInContainer>
  )
}

export default SignIn
