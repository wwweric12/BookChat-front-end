import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import ChatModal from '../../component/Modal/ChatModal.jsx';
import SearchBar from '../../component/SearchBar.jsx';
import Chat from '../../images/Chatlist.svg';
import ChatFocus from '../../images/ChattingFocus.svg';

const Main = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleSearch = (searchKeyWord) => {
    navigate(`/search?q=${encodeURIComponent(searchKeyWord)}`);
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <ChattingImg src={showModal ? ChatFocus : Chat} alt="채팅 이미지" onClick={handleModal} />
      <ModalContainer>{showModal && <ChatModal />}</ModalContainer>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

const ChattingImg = styled.img`
  width: 100px;
  height: 100px;
  align-self: flex-end;
  margin-top: 370px;
  margin-right: 20px;
  z-index: 20;
  &:hover {
    cursor: pointer;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 60px;
  z-index: 10;
`;
