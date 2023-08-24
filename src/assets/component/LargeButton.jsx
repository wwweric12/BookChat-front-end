import { styled } from 'styled-components';

const LargeButton = ({ text }) => {
  return <Button>{text}</Button>;
};

export default LargeButton;

const Button = styled.button`
  width: 540px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.BROWN50};
  font-size: 48px;
  color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 20px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.BROWN100};
  }
`;
