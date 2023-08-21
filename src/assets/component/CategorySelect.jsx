import { useState } from 'react';

import { styled } from 'styled-components';

import Option from './Option.jsx';

const CATEGORY_DATA = [
  {
    text: '문제풀이',
  },
  {
    text: '개념풀이',
  },
  {
    text: '오타/오역',
  },
  {
    text: '질문',
  },
];

const CategorySelect = () => {
  const [Category, setCategory] = useState('질문');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container>
      <SelectBox value={Category} onChange={handleCategoryChange}>
        {CATEGORY_DATA.map((item) => (
          <Option text={item.text} key={item.text} />
        ))}
      </SelectBox>
    </Container>
  );
};

export default CategorySelect;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.BLACK};
  border-radius: 10px;
`;

const SelectBox = styled.select`
  width: 770px;
  height: 40px;
  display: flex;
  text-align: center;
  appearance: none;
  color: ${({ theme }) => theme.colors.BLACK};
  border: none;
  border-radius: 10px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
