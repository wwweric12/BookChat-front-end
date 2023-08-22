import { Axios } from '../Axios';

export const AxiosBoard = async ({ setBoard, isbn, boardId }) => {
  try {
    const res = await Axios.get(`/books/${isbn}/boards/details/${boardId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    setBoard(res.data.data);
  } catch (error) {
    console.log(error);
    alert(error.response.data.cause);
  }
};
