import { styled } from 'styled-components';

const CategoryButton = ({ text }) => {
  return <Button>{text}</Button>;
};

export default CategoryButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 160px;
  height: 70px;
  font-size: 30px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 20px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.LIGHTGRAY};
  }
`;
