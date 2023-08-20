import { Axios } from './Axios';

export const AxiosSignin = async (data, callbackFunction) => {
  const { password, email } = data;
  try {
    const res = await Axios.post('/auth/signin', {
      email,
      password,
    });
    callbackFunction(res.data);
  } catch (error) {
    console.log(error.response.data.cause);
  }
};
