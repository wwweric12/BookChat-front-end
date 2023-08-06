import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import Input from '../../component/Input.jsx';
import LargeButton from '../../component/LargeButton.jsx';

import { validation } from './Validation.jsx';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <LoginConatiner>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input title="아이디" placeholder="아이디를 입력해주세요" type="id" register={register} inputId="id" />
          {errors.id && <LoginError>{errors.id.message}</LoginError>}
          <Input
            title="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            register={register}
            inputId="password"
          />
          {errors.password && <LoginError>{errors.password.message}</LoginError>}
        </InputContainer>
        <LargeButton text="로그인" />
      </LoginForm>
      <SignupLink to="/signup">회원이 아니신가요? 회원가입하러가기</SignupLink>
    </LoginConatiner>
  );
};

export default Login;

const LoginConatiner = styled.div`
  width: 540px;
  height: 606px;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.div`
  width: 380px;
  height: 125px;
  font-size: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.BROWN100};
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 80px;
`;

const LoginForm = styled.form`
  width: 100%;
`;

const LoginError = styled.div`
  width: 100%;
  color: #ea533c;
  font-size: 10px;
`;

const SignupLink = styled(Link)`
  width: 100%;
  height: 35px;
  font-size: 15px;
  display: flex;
  justify-content: end;
  align-items: center;
  color: ${({ theme }) => theme.colors.MINT100};
`;
