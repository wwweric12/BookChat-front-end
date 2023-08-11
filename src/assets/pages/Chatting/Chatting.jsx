import { useEffect, useRef, useState } from 'react';

import { styled } from 'styled-components';

import ChatParticipant from '../../component/ChatParticipant.jsx';
import Search from '../../images/Search.svg';
import Send from '../../images/Send.svg';
import User from '../../images/User.svg';
const Chatting = ({ title, author }) => {
  const [chatList, setChatList] = useState([]);
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setChatList((prev) => [...prev, inputText]);
      setInputText('');
    } else {
      setInputText('');
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Container>
      <ChatContainer>
        <ChatHeader>
          <ChatTitle>5공학관 호이짜</ChatTitle>
          <ChatAuthor>경규혁</ChatAuthor>
        </ChatHeader>
        <ChatContent ref={scrollRef}>
          {chatList.map((text, index) => {
            return (
              <ChatBox key={index} $isMine={false}>
                {/* {!$isMine && <UserImg src={User} />} */}
                <MessageText $isMine={false}>{text}</MessageText>
              </ChatBox>
            );
          })}
        </ChatContent>
        <ChatForm onSubmit={handleSubmit}>
          <ChatInput placeholder="채팅을 입력하세요" onChange={handleChange} value={inputText} />
          <button type="submit">
            <SendImg src={Send} />
          </button>
        </ChatForm>
      </ChatContainer>
      <ParticipantContainer>
        <SearchContainer>
          <SearchImg src={Search} />
          <SearchInput placeholder="검색" />
        </SearchContainer>
        <ContentBox>
          <ChatParticipant>현재 참여자</ChatParticipant>
          <ChatParticipant>참여했던 사람</ChatParticipant>
        </ContentBox>
      </ParticipantContainer>
    </Container>
  );
};
export default Chatting;

const Container = styled.div`
  width: 800px;
  height: 670px;
  display: flex;
  margin: 0 auto;
`;

const ChatContainer = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px 0 0 20px;
  border: 3px solid ${({ theme }) => theme.colors.MINT100};
`;

const ChatHeader = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 20px 0 0 0;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.MINT50};
`;

const ChatTitle = styled.div`
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.colors.WHITE};
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const ChatAuthor = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

const ChatContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$isMine ? 'flex-end' : 'baseline')};
  padding: 10px 20px;
`;

const UserImg = styled.img`
  width: 30px;
  height: 30px;
  align-self: baseline;
`;

const MessageText = styled.div`
  font-size: 15px;
  max-width: 500px;
  word-wrap: break-word;
  border-radius: 20px;
  background: ${(props) => (props.$isMine ? props.theme.colors.MINT100 : ' rgba(170, 170, 170, 0.46)')};
  padding: 10px;
  color: ${(props) => (props.$isMine ? props.theme.colors.WHITE : props.theme.colors.BLACK)};
`;

const ChatForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.MINT100};
  padding: 0 10px;
`;

const ChatInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
`;

const SendImg = styled.img`
  width: 25px;
  height: 25px;
`;
const ParticipantContainer = styled.div`
  width: 200px;
  height: 100%;
  border: 3px solid ${({ theme }) => theme.colors.MINT100};
  border-left: 0px;
  border-radius: 0 20px 20px 0;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  border: none;
  padding: 0 10px;
`;

const SearchImg = styled.img`
  width: 30px;
  height: 30px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding: 0 10px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
