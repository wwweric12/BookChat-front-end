import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { AxiosBoard } from '../../../api/Board/AxiosBoard.js';
import { AxiosComment } from '../../../api/Comment/AxiosComment.js';
import { AxiosDeletePost } from '../../../api/Post/AxiosDeletePost';
import { AxiosEditPost } from '../../../api/Post/AxiosEditPost.js';
import { BoardTitleAtom } from '../../component/atom/BoardTitleAtom.jsx';
import Comment from '../../component/Comment.jsx';
import SmallButton from '../../component/SmallButton.jsx';
import { Writer } from '../../component/Writer.jsx';
import { FormatTime } from '../../util/FormatTime.jsx';

const Post = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useLocation();

  const { editTitle, editContent, editCategory, isbn, id } = state;

  const [locationValue, setLocaitionValue] = useRecoilState(BoardTitleAtom);
  const [board, setBoard] = useState([]);
  const [commentContent, setCommentContent] = useState();
  const [comment, setComment] = useState();

  useEffect(() => {
    if (location.state) {
      AxiosBoard({ setBoard, isbn: location.state.isbn, boardId: location.state.id });
      setLocaitionValue(location.state);
    } else {
      AxiosBoard({ setBoard, isbn: locationValue.isbn, boardId: locationValue.id });
    }
  }, [location.state]);
  const { comments, views, createdAt, title, content, mine, writer } = board;

  const handleComment = (event) => {
    setCommentContent();
    AxiosComment({ boardId: locationValue.id, content: commentContent, setComment });
  };

  const handleCommentContent = (e) => {
    setCommentContent(e.target.value);
  };

  const handleDeletePost = () => {
    AxiosDeletePost({ boardId: locationValue.id, isbn: locationValue.isbn, callbackFunction });
  };

  const callbackFunction = (response) => {
    alert(response.data.message);
    navigate(-1);
  };

  const handleGoEdit = () => {
    navigate('/editpost', {
      state: {
        title: editTitle,
        content: editContent,
        boardCategory: editCategory,
        isbn,
        id,
      },
    });
  };

  return (
    board && (
      <BackGround>
        <Container>
          <Writer isBoard={true} author={writer} view={views} date={createdAt} />
          <TextContainer>
            <Title>{title}</Title>
            <ContentBox>
              <Content>{content}</Content>

              <EditDeleteButtonArea>
                {mine && (
                  <>
                    <EditButtonArea>
                      <SmallButton handleClick={handleGoEdit} small={true}>
                        수정
                      </SmallButton>
                    </EditButtonArea>
                    <DeleteButtonArea>
                      <SmallButton handleClick={handleDeletePost} small={true}>
                        삭제
                      </SmallButton>
                    </DeleteButtonArea>
                  </>
                )}
              </EditDeleteButtonArea>
            </ContentBox>
          </TextContainer>
          <CommentContainer>
            <CountComment>{comments?.length}개의 댓글</CountComment>
            <CreateCommentContainer onSubmit={handleComment}>
              <CreateComment
                placeholder="댓글을 작성하세요"
                onChange={handleCommentContent}
                value={commentContent}
              ></CreateComment>
              <CreateButtonArea>
                <SmallButton>작성하기</SmallButton>
              </CreateButtonArea>
            </CreateCommentContainer>
            {board.comments &&
              board.comments.map((item, index) => (
                <Comment key={index} data={item} mine={mine} id={locationValue.id}>
                  {item.content}
                </Comment>
              ))}
          </CommentContainer>
        </Container>
      </BackGround>
    )
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
  margin-bottom: 15px;
`;

const CreateCommentContainer = styled.form`
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
const EditDeleteButtonArea = styled.div`
  display: flex;
  width: 900px;
  height: 82px;
  justify-content: flex-end;
  padding: 22px 10px 22px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
`;

const DeleteButtonArea = styled.div`
  margin-left: 15px;
`;

const EditButtonArea = styled.div``;
