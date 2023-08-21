import { styled } from 'styled-components';

const SmallButton = ({ children }) => {
  return <Button>{children}</Button>;
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
