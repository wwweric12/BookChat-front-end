import { styled } from 'styled-components';

const LargeButton = ({ text }) => {
  // <LargeButton text="로그인"/> 이런식으로 사용하면 됩니다.
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
