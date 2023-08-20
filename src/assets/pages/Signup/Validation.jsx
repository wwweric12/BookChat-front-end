import * as yup from 'yup';
export const validation = yup.object().shape({
  userName: yup
    .string()
    .required('닉네임형식에 맞지않습니다')
    .matches(/^(?=.*[a-zA-Z0-9가-힣])(?=.{2,10}).*$/, '닉네임은 2~10글자사이입니다'),
  password: yup
    .string()
    .required('비밀번호형식에 맞지않습니다')
    .matches(/^(?=.*[a-zA-Z0-9!@#$%^&*])(?=.{4,16}).*$/, '비밀번호눈 4~16글자사이입니다'),
  email: yup
    .string()
    .required('이메일형식에 맞지않습니다')
    .matches(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\.)+\w+$/, '이메일형식에 맞지않습니다'),
});
