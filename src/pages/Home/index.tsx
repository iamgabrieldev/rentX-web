import { Col, Image } from "antd";
import { RowStyled, Typography } from "./styles";
import LogoSvg from "../../assets/Logotipo.png";
const { Title } = Typography;

const Home: React.FC = () => {
  return (
    <RowStyled>
      <Col>
        <Image src={LogoSvg} preview={false} />
        <Title level={2}>Teste</Title>
      </Col>
    </RowStyled>
  );
};

export default Home;
