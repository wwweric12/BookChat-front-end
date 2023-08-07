import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { BookAtom } from '../component/atom/BookAtom.jsx';

import Option from './Option.jsx';

const SEARCH_DATA = [
  {
    text: '저자',
  },
  {
    text: '책제목',
  },
];

const Select = () => {
  const [searchText, setSearchText] = useRecoilState(BookAtom);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Container>
      <SelectBox value={searchText} onChange={handleSearchChange}>
        {SEARCH_DATA.map((item) => (
          <Option text={item.text} key={item.text} />
        ))}
      </SelectBox>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  width: 130px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectBox = styled.select`
  display: flex;
  text-align: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: ${({ theme }) => theme.colors.BLACK};
  border: none;
  font-size: 35px;
  &:hover {
    cursor: pointer;
  }
`;
