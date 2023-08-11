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
  width: 90px;
  height: 40px;
  font-size: 15px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 15px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.LIGHTGRAY};
  }
`;
