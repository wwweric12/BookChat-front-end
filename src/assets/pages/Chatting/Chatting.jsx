import { useEffect, useRef, useState } from 'react';

import { Stomp } from '@stomp/stompjs';
import { useLocation } from 'react-router-dom';
import * as SockJs from 'sockjs-client';
import { styled } from 'styled-components';

import { AxiosBeforeChat } from '../../../api/Chat/AxiosBeforeChat.js';
import { AxiosChat } from '../../../api/Chat/AxiosChat.js';
import ChatParticipant from '../../component/ChatParticipant.jsx';
import Search from '../../images/Search.svg';
import Send from '../../images/Send.svg';
import User from '../../images/User.svg';

const Chatting = () => {
  // CONNECT
  let client = useRef();
  const scrollRef = useRef();

  const location = useLocation();
  const [incomingMessageData, setIncomingMessageData] = useState([]);
  const [clientData, setClientData] = useState(null);
  const [inputText, setInputText] = useState('');
  const [myId, setMyId] = useState();
  const [onlineUser, setOnlineUser] = useState([null]);
  const [participant, setParticipant] = useState([null]);

  useEffect(() => {
    AxiosChat({ isbn: location.state.isbn, callbackFunction });
    AxiosBeforeChat({ isbn: location.state.isbn, beforeFunction });
    if (location.state) {
      window.onbeforeunload = function (e) {
        return disconnect();
      };
      const connect = () => {
        client = Stomp.over(() => {
          return new SockJs(`${process.env.REACT_APP_BASE_URL}/websocket-stomp`);
        });
        client.connect(
          {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          (message) => {
            setMyId(message.headers['user-name']);
            console.log('CONNECT success! next step SUBSCRIBE');
            client.subscribe(`/sub/chat/rooms/${location.state.isbn}`, getMessage);
            client.send(
              '/pub/chat/enter',
              { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
              JSON.stringify({ roomId: location.state.isbn }),
            );
          },
          (frame) => {
            console.log('CONNECT error:' + frame);
          },
        );
        setClientData(client);
      };
      connect();
    }
    return () => {
      disconnect();
      window.onbeforeunload = null;
    };
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [incomingMessageData]);

  const getMessage = (message) => {
    if (message.body) {
      const msg = JSON.parse(message.body);
      console.log('message exits');
      setOnlineUser(msg.onlineUserList);
      setParticipant(msg.visitedUserList);
      setIncomingMessageData((prevData) => [
        ...prevData,
        { sessionId: msg.sessionId, sender: msg.sender, message: msg.message },
      ]);
    } else {
      console.log('no message');
    }
  };
  const disconnect = () => {
    client.send(
      '/pub/chat/quit',
      {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      JSON.stringify({ roomId: location.state.isbn }),
    );
    console.log('채팅이 종료되었습니다.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      clientData.send(
        '/pub/chat/message',
        { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        JSON.stringify({ roomId: location.state.isbn, message: inputText, sessionId: myId }),
      );
      setInputText('');
    } else {
      setInputText('');
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const callbackFunction = (res) => {
    console.log(res);
  };

  const beforeFunction = (res) => {
    res.map((item) => {
      setIncomingMessageData((prevData) => [...prevData, { sessionId: 1, sender: item.sender, message: item.content }]);
    });
  };

  const handleIsMine = (item) => {
    if (item.sessionId === myId) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Container>
      <ChatContainer>
        <ChatHeader>
          <ChatTitle>{location.state.title}</ChatTitle>
          <ChatAuthor>{location.state.authors}</ChatAuthor>
        </ChatHeader>
        <ChatContent ref={scrollRef}>
          {incomingMessageData &&
            incomingMessageData.map((item, index) => {
              if (item.sessionId === '1') {
                return <WelcomeMessage>{item.message}</WelcomeMessage>;
              } else {
                return (
                  <ChatBox key={index} $isMine={handleIsMine(item)}>
                    {!handleIsMine(item) && <UserImg src={User} />}
                    <ChatMessageBox>
                      {!handleIsMine(item) && <ChatSender>{item.sender}</ChatSender>}
                      <MessageText $isMine={handleIsMine(item)}>{item.message}</MessageText>
                    </ChatMessageBox>
                  </ChatBox>
                );
              }
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
          {onlineUser && <ChatParticipant user={onlineUser}>현재 참여자</ChatParticipant>}
          {participant && <ChatParticipant user={participant}>참여했던 사람</ChatParticipant>}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px 0 0 0;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.MINT50};
`;

const ChatTitle = styled.div`
  width: 500px;
  height: 50px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
`;

const ChatAuthor = styled.div`
  width: 500px;
  height: 50px;
  white-space: nowrap;
  margin-top: 10px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.WHITE};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const WelcomeMessage = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.GRAY};
  padding: 10px 20px;
  font-size: 15px;
`;

const ChatBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$isMine ? 'flex-end' : 'baseline')};
  padding: 10px 20px;
`;

const ChatMessageBox = styled.div``;

const ChatSender = styled.div`
  width: 100px;
  margin-bottom: 5px;
  margin-left: 5px;
`;

const UserImg = styled.img`
  width: 40px;
  height: 60px;
  align-self: baseline;
  margin-right: 10px;
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
