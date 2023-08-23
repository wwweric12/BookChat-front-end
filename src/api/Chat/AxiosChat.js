import { Axios } from '../Axios';

export const AxiosChat = async ({ isbn, callbackFunction }) => {
  console.log(isbn);
  try {
    const res = await Axios.post(
      `/rooms`,
      {},
      {
        params: {
          isbn: isbn,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    callbackFunction(res);
  } catch (error) {
    console.log(error);
    // alert(error.response.data.cause);
  }
};
