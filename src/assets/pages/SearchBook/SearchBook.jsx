import { useState, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { AxiosSearchBook } from '../../../api/AxiosSearchBook.js';
import { BookAtom } from '../../component/atom/BookAtom.jsx';
import BookList from '../../component/BookList.jsx';
import SearchBar from '../../component/SearchBar.jsx';
import Jungho from '../../images/Jungho.svg';

const BOOK_DATA = [
  {
    img: Jungho,
    title: '5공학관의 김정호이짜',
    author: '경규혁',
    id: 1,
  },
  {
    img: Jungho,
    title: '정님',
    author: '썩준민',
    id: 2,
  },
  {
    img: Jungho,
    title: '김정호랑이',
    author: '김동동',
    id: 3,
  },
];

const SearchBook = () => {
  const [bookList, setBookList] = useState([]);

  const [option, setOption] = useRecoilState(BookAtom);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      await AxiosSearchBook(searchQuery, option, (res) => setBookList(res));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';

  const navigate = useNavigate();

  const handleSearch = (searchKeyWord) => {
    navigate(`/books?q=${encodeURIComponent(searchKeyWord)}`);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <ResultTextBox>
        <ResultName>{`'${searchQuery}'`}</ResultName>
        <ResultText>에 대한 3개의 검색 결과</ResultText>
      </ResultTextBox>
      <ResultBookList>
        {bookList.map((item, index) => (
          <BookList data={item} key={index} />
        ))}
      </ResultBookList>
    </Container>
  );
};

export default SearchBook;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 47px;
`;

const ResultTextBox = styled.div`
  display: flex;
  width: 900px;
  padding: 20px 0;
  font-size: 20px;
  margin-top: 17px;
`;

const ResultName = styled.p`
  color: ${({ theme }) => theme.colors.MINT100};
`;

const ResultText = styled.p``;

const ResultBookList = styled.div`
  display: flex;
  flex-direction: column;

  width: 900px;
`;
