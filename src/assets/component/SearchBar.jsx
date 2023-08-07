import { styled } from 'styled-components';

import SearchIcon from '../images/Search.svg';

import Select from './Select.jsx';

const SearchBar = () => {
  return (
    <SearchInputBox>
      <Select />
      <SearchInput placeholder="검색어를 입력하세요." />
      <SelectImg src={SearchIcon} alt="돋보기 이미지" />
    </SearchInputBox>
  );
};

export default SearchBar;

const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 998px;
  height: 140px;
  border: 3px solid ${({ theme }) => theme.colors.MINT100};
  border-radius: 80px;
`;

const SearchInput = styled.input`
  display: flex;
  width: 660px;
  height: 80px;
  font-size: 35px;
  padding: 10px 20px;
  border: none;
  border-left: 1px solid ${({ theme }) => theme.colors.GRAY};
  margin-right: 70px;

  &::placeholder {
    font-size: 35px;
  }
`;

const SelectImg = styled.img`
  width: 63px;
  height: 63px;

  &:hover {
    cursor: pointer;
  }
`;
