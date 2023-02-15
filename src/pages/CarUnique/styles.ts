import styled from 'styled-components'

export const TabDatePicker = styled.div`
  p {
    max-width: 480px;
    line-height: 1.5;
    font-size: 1rem;
    opacity: 0.8;
  }

  div {
    display: flex;
    gap: 1rem;
    margin: 0.5rem 0rem 0.5rem 0rem;
    justify-content: space-between;

    label {
      text-transform: uppercase;
      font-size: 0.75rem;
      color: #aeaeb3;
    }

    h2 {
      color: red;
      font-size: 2rem;
    }
  }
`

export const IconContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  svg {
    background: ${({ theme }) => theme.colors['gray-100']};
    color: ${({ theme }) => theme.colors['gray-600']};
    padding: 1rem 0rem;
    width: 60px;
    height: 60px;
  }
  span {
    width: 150px;
    height: 60px;
    margin-left: -44px;
    padding: 1rem 2rem 1rem 2rem;
    background: ${({ theme }) => theme.colors['gray-100']};
  }
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100vh;
`

export const HeaderContainer = styled.header`
  margin-left: 7rem;
  padding: 4rem 0rem 2rem;
  margin: 0rem 14rem 1rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  border-bottom: 3px solid #e5e5e5;
  width: 80%;

  p {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    color: #333;
  }

  h2 {
    font-weight: bold;
    font-size: 2rem;
  }

  .price {
    color: red;
  }
`

export const ContentContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0rem 0rem 12rem;

  div {
    width: 40vw;

    img {
      width: 36vw;
    }

    button:after {
      background: #333;
    }
  }
`

export const InfoContainer = styled.section`
  margin-left: 1rem;
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 568px;
    margin: 1rem 0rem 4rem 0rem;

    div {
      flex: 1 2 280px;
    }
  }
`
