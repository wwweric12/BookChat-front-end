import { styled } from 'styled-components';

import { AxiosCommentDelete } from '../../api/Comment/AxiosCommentDelete.js';

import { Writer } from './Writer.jsx';

const Comment = ({ children, data, id }) => {
  const { commentWriter, createdAt, mine, commentId } = data;
  const handleDelete = () => {
    AxiosCommentDelete({ boardId: id, commentId, callbackFunction });
  };

  const callbackFunction = (res) => {
    alert(res.data.message);
    window.location.reload();
  };

  return (
    <CommentContainer>
      <WriterContainer>
        <Writer isBoard={false} author={commentWriter} date={createdAt} />
        {mine && <CommentDelete onClick={handleDelete}>삭제</CommentDelete>}
      </WriterContainer>
      <CommentContent>{children}</CommentContent>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  display: flex;
  width: 850px;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 20px;
`;

const CommentContent = styled.div`
  font-size: 16px;
  padding: 22px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
`;

const CommentDelete = styled.button`
  white-space: nowrap;
  margin-right: 20px;
`;

const WriterContainer = styled.div`
  display: flex;
`;
