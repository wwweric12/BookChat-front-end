import { styled } from 'styled-components';

import Comment from '../../component/Comment.jsx';
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
            <DeleteButtonArea>
              <SmallButton text="삭제하기" />
            </DeleteButtonArea>
          </ContentBox>
        </TextContainer>
        <CommentContainer>
          <CountComment>20개의 댓글</CountComment>
          <CreateCommentContainer>
            <CreateComment placeholder="댓글을 작성하세요"></CreateComment>
            <CreateButtonArea>
              <SmallButton text="작성하기" />
            </CreateButtonArea>
          </CreateCommentContainer>
          <Comment comment="님이 예민한거임 ㅋㅋ 뭐노?"></Comment>
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

const DeleteButtonArea = styled.div`
  display: flex;
  width: 900px;
  height: 82px;
  justify-content: flex-end;
  padding: 22px 29px 22px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
`;

const CommentContainer = styled.div`
  display: flex;
  width: 900px;
  margin-top: 40px;
  flex-direction: column;
`;

const CountComment = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: 25px;
`;

const CreateCommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.BLACK};
  padding: 20px;
`;

const CreateComment = styled.textarea`
  width: 700px;
  height: 110px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 20px;
  resize: none;
  padding: 10px;
`;

const CreateButtonArea = styled.div`
  align-self: flex-end;
  margin-left: 32px;
`;
