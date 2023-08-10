import { styled } from 'styled-components';

const ChatModal = ({ userId }) => {
  return (
    <Layout>
      <HeaderBox>
        <HeaderText>{`${userId}'s chat-list`}</HeaderText>
      </HeaderBox>
      <Content></Content>
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

const ExitButton = styled.img`
  width: 25px;
  height: 25px;

  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 683px;
`;
