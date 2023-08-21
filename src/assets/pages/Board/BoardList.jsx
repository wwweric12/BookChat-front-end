import { useEffect, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { AxiosBoardCategory } from '../../../api/Board/AxiosBoardCategory.js';
import { AxiosBoardList } from '../../../api/Board/AxiosBoardList.js';
import BoardListComponent from '../../component/BoardListComponent.jsx';
import BoardListSearch from '../../component/BoardListSearch.jsx';
import BookList from '../../component/BookList.jsx';
import CategoryButton from '../../component/CategoryButton.jsx';
import SmallButton from '../../component/SmallButton.jsx';
import Paging from '../Paging/Paging.jsx';

const BoardList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { title, isbn, authors, thumbnail } = location.state;

  const [count, setCount] = useState(0);
  const [pageInfo, setPageInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookPerPage] = useState(5);
  const [indexOfFirstBook, setIndexOfFirstBook] = useState(0);
  const [indexOfLastBook, setIndexOfLastBook] = useState(0);
  const [currentBook, setCurrentBook] = useState([]);

  const CATEGORIES = [
    { title: '문제풀이', category: 'SOLUTION' },
    { title: '개념풀이', category: 'CONCEPT' },
    { title: '오타오역', category: 'TYPO' },
    { title: '질문', category: 'QUESTION' },
    { title: '전체', category: 'ALL' },
  ];
  const [boardList, setBoardList] = useState([]);
  const [state, setState] = useState({
    SOLUTION: false,
    CONCEPT: false,
    TYPO: false,
    QUESTION: false,
    ALL: true,
  });

  const callbackFunction = (data) => {
    setBoardList(data.data.results);
    setPageInfo(data.data.pageInfo);
  };

  useEffect(() => {
    AxiosBoardList({ setBoardList, location });
  }, [location.state.isbn]);

  useEffect(() => {
    if (state.ALL) {
      AxiosBoardList({ callbackFunction, location, page: currentPage });
    } else {
      const category = Object.keys(state).filter((item) => state[item]);
      AxiosBoardCategory({ callbackFunction, location, page: currentPage, category });
    }
  }, [currentPage]);

  useEffect(() => {
    setCount(pageInfo?.totalElements);
    setIndexOfLastBook(currentPage * bookPerPage);
    setIndexOfFirstBook(indexOfLastBook - bookPerPage);
    setCurrentBook(boardList?.slice(indexOfFirstBook, indexOfLastBook));
  }, [currentPage, indexOfLastBook, indexOfFirstBook, boardList, bookPerPage]);

  const handleWrite = () => {
    navigate('/createpost', { state: { title, isbn, authors, thumbnail } });
  };

  const setPage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <BoardListContainer>
      <BookList data={location.state} isSearch={false} />
      <CategoryBox>
        {CATEGORIES.map((item, index) => (
          <CategoryButton
            location={location}
            state={state}
            setState={setState}
            callbackFunction={callbackFunction}
            category={item.category}
            key={index}
            page={currentPage}
          >
            {item.title}
          </CategoryButton>
        ))}
        <div onClick={handleWrite}>
          <SmallButton>게시글 작성</SmallButton>
        </div>
      </CategoryBox>
      <SearchContainer>
        <BoardListSearch location={location} callbackFunction={callbackFunction} setState={setState} />
      </SearchContainer>
      <BoardContainer>
        {currentBook.map((item) => (
          <Link to={`/board/${item.id}`} key={item.id}>
            <BoardListComponent data={item} />
          </Link>
        ))}
      </BoardContainer>
      {count && <Paging page={currentPage} count={count} setPage={setPage} />}
    </BoardListContainer>
  );
};

export default BoardList;

const BoardListContainer = styled.div`
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
