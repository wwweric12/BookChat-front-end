import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { BookAtom } from '../component/atom/BookAtom.jsx';

import Option from './Option.jsx';

const SEARCH_DATA = [
  {
    text: 'PERSON',
  },
  {
    text: 'TITLE',
  },
  {
    text: 'ISBN',
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
        {SEARCH_DATA.map((item, index) => (
          <Option text={item.text} key={index} />
        ))}
      </SelectBox>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectBox = styled.select`
  display: flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.BLACK};
  border: none;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
