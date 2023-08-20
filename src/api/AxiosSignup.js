import { Axios } from './Axios';

export const AxiosSignup = async (data, callbackFuction) => {
  const { userName, password, email } = data;
  try {
    const res = await Axios.post('/auth/signup', {
      email,
      userName,
      password,
    });
    callbackFuction(res);
  } catch (error) {
    alert(error.response.data.cause);
  }
};
