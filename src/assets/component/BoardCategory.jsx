import { styled } from 'styled-components';

const BoardCategory = ({ category }) => {
  return (
    <CategoryContainer>
      <CategoryText>{category}</CategoryText>
    </CategoryContainer>
  );
};

export default BoardCategory;

const CategoryContainer = styled.div`
  width: 80px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #aaaaaa;
`;

const CategoryText = styled.div`
  font-size: 13px;
  text-align: center;
`;
