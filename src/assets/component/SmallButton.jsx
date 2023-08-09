import { styled } from 'styled-components';

const SmallButton = ({ text }) => {
  // <SmallButton text="작성하기"/> 이런식으로 사용하시면 됩니다.
  return <Button>{text}</Button>;
};

export default SmallButton;

const Button = styled.button`
  width: 144px;
  height: 58px;
  background-color: ${({ theme }) => theme.colors.MINT100};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 25px;
  border-radius: 20px;
`;
