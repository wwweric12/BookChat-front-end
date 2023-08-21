import { useState } from 'react';

import { styled } from 'styled-components';

import SearchIcon from '../images/Search.svg';

import Select from './Select.jsx';

const SearchBar = ({ onSearch }) => {
  const [searchKeyWord, setSearchKeyWord] = useState('');

  const onChangeHandler = (event) => {
    setSearchKeyWord(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchKeyWord.trim() !== '') {
      onSearch(searchKeyWord);
    }
  };

  return (
    <SearchInputBox onSubmit={handleSearch}>
      <Select />
      <SearchInput placeholder="검색어를 입력하세요." value={searchKeyWord} onChange={onChangeHandler} />
      <SelectImg src={SearchIcon} alt="돋보기 이미지" onClick={handleSearch} />
    </SearchInputBox>
  );
};

export default SearchBar;

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
  border-left: 1px solid ${({ theme }) => theme.colors.GRAY};
  margin-right: 40px;
  margin-left: 20px;

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
