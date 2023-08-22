import { Axios } from '../Axios';

export const AxiosComment = async ({ boardId, content, setComment }) => {
  try {
    const res = await Axios.post(
      `/boards/${boardId}/comments`,
      {
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    setComment(res.data);
  } catch (error) {
    console.log(error);
  }
};
