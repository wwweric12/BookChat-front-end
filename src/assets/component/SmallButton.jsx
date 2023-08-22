import { styled } from 'styled-components';

const SmallButton = ({ children, handleClick, small }) => {
  return (
    <Button $small={small} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default SmallButton;

const Button = styled.button`
  width: ${(props) => (props.$small ? '50px' : '100px')};
  height: 35px;
  background-color: ${({ theme }) => theme.colors.MINT100};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 15px;
  border-radius: 12px;
`;
