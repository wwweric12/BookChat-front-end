import { styled } from 'styled-components';

const Input = ({ placeholder, type, register, inputId, title }) => {
  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      <InputContent placeholder={placeholder} type={type} {...register(inputId)} id={inputId} />
    </InputContainer>
  );
};
export default Input;

const InputContainer = styled.div`
  width: 540px;
  height: 125px;
`;

const InputTitle = styled.div`
  width: 100%;
  height: 55px;
  font-size: 25px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.BROWN100};
`;

const InputContent = styled.input`
  width: 100%;
  height: 55px;
  font-size: 17px;
  border: none;
  border-bottom: 3px solid ${({ theme }) => theme.colors.BROWN30};
  &:focus {
    border-bottom: 3px solid ${({ theme }) => theme.colors.BROWN100};
  }
`;
