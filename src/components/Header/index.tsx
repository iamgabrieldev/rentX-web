import { HeaderStyled } from './styles'
import { MdOutlinePerson } from 'react-icons/md'
interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderStyled data-testid="header">
      <h2>{title}</h2>
      <div>
        <span>Faça Login</span>
        <MdOutlinePerson size={32} />
      </div>
    </HeaderStyled>
  )
}

export default Header
