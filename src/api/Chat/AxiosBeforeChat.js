import { Axios } from '../Axios';

export const AxiosBeforeChat = async ({ isbn, beforeFunction }) => {
  try {
    const res = await Axios.get(`/rooms/${isbn}/messages`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    beforeFunction(res.data.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
