import * as yup from 'yup';
export const validation = yup.object().shape({
  email: yup
    .string()
    .required('이메일형식에 맞지않습니다')
    .matches(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\.)+\w+$/, '이메일형식에 맞지않습니다'),
  password: yup
    .string()
    .required('비밀번호형식에 맞지않습니다')
    .matches(/^(?=.*[a-zA-Z0-9!@#$%^&*])(?=.{4,16}).*$/, '비밀번호가 잘못되었습니다'),
});
