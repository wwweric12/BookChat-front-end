import { styled } from 'styled-components';

import SmallButton from '../../component/SmallButton.jsx';
import { Writer } from '../../component/Writer.jsx';
const Post = () => {
  return (
    <BackGround>
      <Container>
        <Writer isBoard={true} author="내이름규혁" view="123" date="08.19" />
        <TextContainer>
          <Title>혹시 제가 예민한건가요?</Title>
          <ContentBox>
            <Content>니얼굴이요</Content>
            <ButtonArea>
              <SmallButton text="삭제하기" />
            </ButtonArea>
          </ContentBox>
        </TextContainer>
        <CommentContainer>
          <CountComment>20개의 댓글</CountComment>
        </CommentContainer>
      </Container>
    </BackGround>
  );
};

export default Post;

const BackGround = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 78px;
`;

const TextContainer = styled.div`
  margin-top: 44px;
`;

const Title = styled.p`
  padding: 10px;
  width: 900px;
  font-size: 35px;
`;

const ContentBox = styled.div`
  width: 900px;
`;

const Content = styled.div`
  padding: 10px;
  font-size: 25px;
  overflow-y: auto;
  height: 460px;
`;

const ButtonArea = styled.div`
  display: flex;
  width: 900px;
  height: 82px;
  justify-content: flex-end;
  padding: 22px 29px 22px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
`;

const CommentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
`;

const CountComment = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: 25px;
`;
