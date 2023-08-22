import { Axios } from './Axios';

export const AxiosDeletePost = async ({ isbn, boardId }) => {
  try {
    const response = await Axios.delete(`/books/${isbn}/boards/details/${boardId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return alert(response.message);
  } catch (error) {
    return alert(error);
  }
};
