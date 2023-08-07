import { styled } from 'styled-components';

import SearchBar from '../../component/SearchBar.jsx';
import Chat from '../../images/Chatlist.svg';

const Main = () => {
  return (
    <Container>
      <SearchBar />
      <ChattingImg src={Chat} alt="채팅 이미지" />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

const ChattingImg = styled.img`
  width: 100px;
  height: 100px;
  align-self: flex-end;
  margin-top: 250px;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;
