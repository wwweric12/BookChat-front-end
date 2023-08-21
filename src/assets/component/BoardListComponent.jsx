import { styled } from 'styled-components';

import BoardChat from '../images/Board-chat.svg';
import Eye from '../images/Eye.svg';
import { FormatTime } from '../util/FormatTime.jsx';

import BoardCategory from './BoardCategory.jsx';

const BoardListComponent = ({ data }) => {
  const { writer, createdAt, title, view, comment, boardCategory } = data;

  const handleCategory = () => {
    switch (boardCategory) {
      case 'QUESTION':
        return '질문';
      case 'SOLUTION':
        return '문제풀이';
      case 'TYPO':
        return '오타/오역';
      case 'CONCEPT':
        return '개념풀이';
    }
  };

  return (
    <Container>
      <BoardListContainer>
        <BoardListHeader>
          <BoardListAuthor>{writer}</BoardListAuthor>
          <BoardListDate>{FormatTime(createdAt)}</BoardListDate>
        </BoardListHeader>
        <BoardListTitle>{title}</BoardListTitle>
        <BoardDetailContainer>
          <BoardCategory category={handleCategory()} />
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

export default BoardListComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BoardListContainer = styled.div`
  width: 900px;
  height: 120px;
  padding: 5px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.BLACK};
`;

const BoardListHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const BoardListAuthor = styled.div`
  font-size: 15px;
  padding: 10px;
`;

const BoardListDate = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

const BoardListTitle = styled.div`
  font-size: 20px;
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
