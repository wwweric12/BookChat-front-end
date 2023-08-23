import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { AxiosParticipant } from '../../../api/AxiosParticipant.js';
import { BookAtom } from '../../component/atom/BookAtom.jsx';
import ChatModal from '../../component/Modal/ChatModal.jsx';
import SearchBar from '../../component/SearchBar.jsx';
import Chat from '../../images/Chatlist.svg';
import ChatFocus from '../../images/ChattingFocus.svg';

const Main = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useRecoilState(BookAtom);

  const [showModal, setShowModal] = useState(false);
  const [participantChat, setParticipantChat] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/login');
      alert('로그인이 필요합니다');
    } else {
      AxiosParticipant({ callbackFunction });
    }
  }, []);

  const callbackFunction = (res) => {
    const chatlist = res.data.filter((room, index, array) => {
      return array.findIndex((item) => item.isbn === room.isbn) === index;
    });
    setParticipantChat(chatlist);
  };

  const handleSearch = (searchKeyWord) => {
    navigate(`/books?query=${searchKeyWord}&searchField=${searchText}`);
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <ChattingImg src={showModal ? ChatFocus : Chat} alt="채팅 이미지" onClick={handleModal} />
      <ModalContainer>{showModal && <ChatModal participants={participantChat} />}</ModalContainer>
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
  position: absolute;
  width: 50px;
  height: 50px;
  align-self: flex-end;
  right: 230px;
  bottom: 20px;
  z-index: 20;
  &:hover {
    cursor: pointer;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  bottom: 60px;
  right: 280px;
  z-index: 10;
`;
