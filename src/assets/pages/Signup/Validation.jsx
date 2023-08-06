import * as yup from 'yup';
export const validation = yup.object().shape({
  id: yup
    .string()
    .required('아이디형식에 맞지않습니다')
    .matches(/^[a-z0-9]{4,20}$/, '아이디형식에 맞지않습니다'),
  password: yup
    .string()
    .required('비밀번호형식에 맞지않습니다')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,13}$/, '비밀번호형식에 맞지않습니다'),
  email: yup
    .string()
    .required('이메일형식에 맞지않습니다')
    .matches(
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
      '이메일형식에 맞지않습니다',
    ),
});
