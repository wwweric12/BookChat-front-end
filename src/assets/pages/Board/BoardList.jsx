import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import BoardListComponent from '../../component/BoardListComponent.jsx';
import BookList from '../../component/BookList.jsx';
import CategoryButton from '../../component/CategoryButton.jsx';
import SearchBar from '../../component/SearchBar.jsx';
import SmallButton from '../../component/SmallButton.jsx';
import Jungho from '../../images/Jungho.svg';
const BoardList = () => {
  const item = { img: Jungho, title: '5공학관 호이짜님', author: 'gbgur', isSearch: false };
  const BOARD_LIST_DATA = [
    {
      author: '경규혁',
      date: '2일전',
      title: '규혁이네 집가서 규혁이함여',
      view: '2323',
      comment: '3232',
      category: '문제풀이',
      id: 1,
    },
    {
      author: '최원유',
      date: '243일전',
      title: '언거거거 구구 집가서 규혁이함여',
      view: '2323',
      comment: '3232',
      category: '개념풀이',
      id: 2,
    },
  ];
  return (
    <BoardListConatiner>
      <BookList data={item} />
      <CategoryBox>
        <CategoryButton text="문제풀이" />
        <CategoryButton text="개념풀이" />
        <CategoryButton text="오타/오역" />
        <CategoryButton text="질문" />
        <CategoryButton text="전체" />
        <SmallButton text="게시글 작성" />
      </CategoryBox>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <BoardContainer>
        {BOARD_LIST_DATA.map((item) => (
          <Link to={`/boardlist/${item.id}`}>
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
