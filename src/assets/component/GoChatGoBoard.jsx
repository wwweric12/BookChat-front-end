import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const GoChatGoBoard = ({ data }) => {
  const { text, img, move } = data;

  const navigate = useNavigate();

  const handleMove = () => {
    navigate(`/${move}`);
  };

  return (
    <Container onClick={handleMove}>
      <Text>{text}</Text>
      <Arrow src={img} alt="오른쪽 화살표" />
    </Container>
  );
};

export default GoChatGoBoard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 210px;
  height: 90px;
`;

const Text = styled.p`
  font-size: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const Arrow = styled.img`
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
