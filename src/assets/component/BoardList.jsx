import { styled } from 'styled-components';

import BoardChat from '../images/Board-chat.svg';
import Eye from '../images/Eye.svg';

import BoardCategory from './BoardCategory.jsx';

const BoardList = ({ author, date, title, view, comment, category }) => {
  return (
    <Container>
      <BoardListContainer>
        <BoardListHeader>
          <BoardListAuthor>{author}</BoardListAuthor>
          <BoardListDate>{date}</BoardListDate>
        </BoardListHeader>
        <BoardListTitle>{title}</BoardListTitle>
        <BoardDetailContainer>
          <BoardCategory category={category} />
          <BoardDetail>
            <BoardViewBox>
              <img src={Eye} alt="view-icon" />
              <BoardView>{view}</BoardView>
            </BoardViewBox>
            <BoardCommentBox>
              <img src={BoardChat} alt="Comment-icon" />
              <BoardComment>{comment}</BoardComment>
            </BoardCommentBox>
          </BoardDetail>
        </BoardDetailContainer>
      </BoardListContainer>
    </Container>
  );
};

export default BoardList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const BoardListContainer = styled.div`
  width: 800px;
  height: 150px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.BLACK};
`;

const BoardListHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const BoardListAuthor = styled.div`
  font-size: 20px;
  padding: 20px;
`;

const BoardListDate = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

const BoardListTitle = styled.div`
  font-size: 30px;
  margin-top: 5px;
`;

const BoardDetailContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
const BoardDetail = styled.div`
  display: flex;
  align-items: center;
`;

const BoardViewBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const BoardView = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.MINT100};
  margin-left: 5px;
`;

const BoardCommentBox = styled.div`
  display: flex;
  align-items: center;
`;

const BoardComment = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.MINT100};
  margin-left: 5px;
`;
