import { Axios } from '../Axios';

export const AxiosDeletePost = async ({ isbn, boardId, callbackFunction }) => {
  try {
    const response = await Axios.delete(`/books/${isbn}/boards/details/${boardId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    callbackFunction(response);
  } catch (error) {
    return alert(error);
  }
};
