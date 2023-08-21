import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Arrow from '../images/RightArrow.svg';

const GoChatGoBoard = ({ data }) => {
  const { text, move, title, isbn, authors, thumbnail } = data;
  const navigate = useNavigate();

  const handleMove = () => {
    navigate(`/${move}/${isbn}`, { state: { title, isbn, authors, thumbnail } });
  };

  return (
    <Container onClick={handleMove}>
      <Text>{text}</Text>
      <img src={Arrow} alt="오른쪽 화살표" />
    </Container>
  );
};

export default GoChatGoBoard;

const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 90px;
`;

const Text = styled.p`
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
