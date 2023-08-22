import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
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

  const [count, setCount] = useState(0); // 책 총 개수
  const [pageInfo, setPageInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지, 기본 값 1
  const [bookPerPage] = useState(5); // 한 페이지에 보여질 책 개수
  const [indexOfFirstBook, setIndexOfFirstBook] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [indexOfLastBook, setIndexOfLastBook] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [currentBook, setCurrentBook] = useState([]); // 현재 페이지에서 보여지는 책들

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

  const handleBoard = (item) => {
    console.log(item);
    navigate(`/board/${item.id}`, {
      state: {
        editTitle: item.title,
        editContent: item.content,
        editCategory: item.boardCategory,
        id: item.id,
        isbn: location.state.isbn,
      }, // 이거 맞음
    });
  };

  return (
    <BoardListConatiner>
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
        {boardList.map((item) => (
          <button onClick={() => handleBoard(item)} key={item.id}>
            <BoardListComponent data={item} />
          </button>
        ))}
      </BoardContainer>
      {count && <Paging page={currentPage} count={count} setPage={setPage} />}
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
