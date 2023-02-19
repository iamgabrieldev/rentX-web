import styled from 'styled-components'

export const SignInContainer = styled.main`
  padding: 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  img {
    min-width: 300px;
  }
`

export const SignInInfoContainer = styled.div``

export const SignInTitle = styled.div`
  h2 {
    font-size: 2.25rem;
    line-height: 130%;
    font-weight: bold;
  }

  p {
    margin: 0.5rem 0rem 2rem;
    font-size: 1rem;
    line-height: 1.625rem;
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    margin: 0rem 0rem 2rem 0rem;
    cursor: pointer
    font-size: 1rem;
    line-height: 1.625rem;
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  border: solid 1px ${({ theme }) => theme.colors['gray-200']};

  label {
    padding: 0.8rem 2rem;
    background-color: ${({ theme }) => theme.colors.white};
    display: block;
  }

  input {
    padding: 1rem 4rem 1rem 1rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  }
`
