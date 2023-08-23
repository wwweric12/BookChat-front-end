import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const ChatModal = ({ participants }) => {
  const navigate = useNavigate();
  const handleChat = (item) => {
    const { isbn, roomName, writer } = item;
    navigate(`/chat/${isbn}`, { state: { title: roomName, isbn, authors: writer } });
  };

  return (
    <Layout>
      <HeaderBox>
        <HeaderText>chat-list</HeaderText>
      </HeaderBox>
      <ContentConatainer>
        {participants.map((item) => (
          <ContentBox onClick={() => handleChat(item)}>
            <ContentImg src={item.imageUrl} alt="book-img" />
            <ChatContent>
              <ContentTitle>{item.roomName}</ContentTitle>
              <ContentAuthor>{item.writer}</ContentAuthor>
            </ChatContent>
          </ContentBox>
        ))}
      </ContentConatainer>
    </Layout>
  );
};

export default ChatModal;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 563px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 3px solid ${({ theme }) => theme.colors.BROWN100};
  border-radius: 20px 20px 0 20px;
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.BROWN70};
  border-radius: 15px 15px 0 0;
  border-bottom: 3px solid ${({ theme }) => theme.colors.BROWN100};
`;

const HeaderText = styled.p`
  display: flex;
  width: 415px;
  height: 49px;
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 25px;
  align-items: center;
  margin-left: 24px;
`;

const ContentConatainer = styled.div`
  width: 100%;
  height: 683px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  padding: 10px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
`;

const ContentImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

const ContentTitle = styled.div`
  width: 415px;
  font-size: 17px;
  padding: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ContentAuthor = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.GRAY};
  padding: 5px 0;
`;
