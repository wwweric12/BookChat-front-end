import { useEffect, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { AxiosBoardList } from '../../../api/Board/AxiosBoardList.js';
import BoardListComponent from '../../component/BoardListComponent.jsx';
import BoardListSearch from '../../component/BoardListSearch.jsx';
import BookList from '../../component/BookList.jsx';
import CategoryButton from '../../component/CategoryButton.jsx';
import SmallButton from '../../component/SmallButton.jsx';

const BoardList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { title, isbn, authors, thumbnail } = location.state;

  const CATEGORIES = [
    { title: '문제풀이', category: 'SOLUTION' },
    { title: '개념풀이', category: 'CONCEPT' },
    { title: '오타오역', category: 'TYPO' },
    { title: '질문', category: 'QUESTION' },
  ];
  const [boardList, setBoardList] = useState([]);
  const [state, setState] = useState({
    SOLUTION: false,
    CONCEPT: false,
    TYPO: false,
    QUESTION: false,
  });

  useEffect(() => {
    AxiosBoardList({ setBoardList, location });
  }, [location.state.isbn]);

  const handleWrite = () => {
    navigate('/createpost', { state: { title, isbn, authors, thumbnail } });
  };

  return (
    <BoardListConatiner>
      <BookList data={location.state} isSearch={false} />
      <CategoryBox>
        {CATEGORIES.map((item, index) => (
          <CategoryButton
            isbn={location.state.isbn}
            state={state}
            setState={setState}
            setBoardList={setBoardList}
            category={item.category}
            key={index}
          >
            {item.title}
          </CategoryButton>
        ))}
        <div onClick={handleWrite}>
          <SmallButton>게시글 작성</SmallButton>
        </div>
      </CategoryBox>
      <SearchContainer>
        <BoardListSearch setBoardList={setBoardList} setState={setState} />
      </SearchContainer>
      <BoardContainer>
        {boardList.map((item) => (
          <Link to={`/board/${item.id}`} key={item.id}>
            <BoardListComponent data={item} />
          </Link>
        ))}
      </BoardContainer>
    </BoardListConatiner>
  );
};

export default BoardList;

const BoardListConatiner = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const BoardContainer = styled.div`
  width: 900px;
  gap: 20px;
`;
