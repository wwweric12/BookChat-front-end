import { Axios } from './Axios';

export const AxiosSearchBook = async () => {
  try {
    const response = await Axios.get('/books', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data;
  } catch (error) {
    return alert(error);
  }
};
