import { useState } from 'react';

import { styled } from 'styled-components';

import Option from './Option.jsx';

const CATEGORY_DATA = {
  문제풀이: 'SOLUTION',
  개념풀이: 'CONCEPT',
  '오타/오역': 'TYPO',
  질문: 'QUESTION',
};

const CategorySelect = ({ onCategoryChange, test }) => {
  const [Category, setCategory] = useState('QUESTION');

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    onCategoryChange(selectedCategory); // 선택한 카테고리 값을 부모 컴포넌트로 전달
  };

  return (
    <Container>
      <SelectBox defaultValue={test} value={Category} onChange={handleCategoryChange}>
        {Object.keys(CATEGORY_DATA).map((item) => (
          <Option text={item} value={CATEGORY_DATA[item]} key={item} />
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
