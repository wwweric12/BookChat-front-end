import { styled } from 'styled-components';

import { Writer } from './Writer.jsx';

const Comment = ({ comment }) => {
  return (
    <CommentContainer>
      <Writer isBoard={false} />
      <CommentContent>{comment} </CommentContent>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  display: flex;
  width: 900px;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 20px;
`;

const CommentContent = styled.div`
  font-size: 16px;
  padding: 22px 0;
  border-bottom: 1px solid black;
`;
