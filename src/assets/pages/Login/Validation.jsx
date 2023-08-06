import * as yup from 'yup';
export const validation = yup.object().shape({
  id: yup
    .string()
    .required('아이디가 잘못되었습니다')
    .matches(/^[a-z0-9]{4,20}$/, '아이디가 잘못되었습니다'),
  password: yup
    .string()
    .required('비밀번호가 잘못되었습니다')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,13}$/, '비밀번호가 잘못되었습니다'),
});
