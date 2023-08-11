import { styled } from 'styled-components';

const SmallButton = ({ text }) => {
  // <SmallButton text="작성하기"/> 이런식으로 사용하시면 됩니다.
  return <Button>{text}</Button>;
};

export default SmallButton;

const Button = styled.button`
  width: 100px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.MINT100};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 15px;
  border-radius: 15px;
`;
