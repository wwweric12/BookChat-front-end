import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { AxiosBoardList } from '../../api/Board/AxiosBoardList';
import SearchIcon from '../images/Search.svg';

import { BoardAtom } from './atom/BoardAtom.jsx';

const BoardListSearch = ({ setBoardList, setState }) => {
  const [searchKeyWord, setSearchKeyWord] = useRecoilState(BoardAtom);

  const onChangeHandler = (event) => {
    setSearchKeyWord(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    AxiosBoardList({ searchKeyWord, setBoardList });
    setState({
      SOLUTION: false,
      CONCEPT: false,
      TYPO: false,
      QUESTION: false,
    });
  };

  return (
    <SearchInputBox onSubmit={handleSearch}>
      <SearchInput placeholder="검색어를 입력하세요." value={searchKeyWord} onChange={onChangeHandler} />
      <SelectImg src={SearchIcon} alt="돋보기 이미지" onClick={handleSearch} />
    </SearchInputBox>
  );
};

export default BoardListSearch;

const SearchInputBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 100px;
  border: 3px solid ${({ theme }) => theme.colors.MINT100};
  border-radius: 80px;
`;

const SearchInput = styled.input`
  display: flex;
  width: 450px;
  height: 40px;
  align-items: center;
  font-size: 20px;
  padding: 10px 20px;
  border: none;
  margin-right: 40px;

  &::placeholder {
    font-size: 20px;
  }
`;

const SelectImg = styled.img`
  width: 40px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`;
