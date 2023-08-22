import { Axios } from '../Axios';

export const AxiosCommentDelete = async ({ boardId, commentId, callbackFunction }) => {
  try {
    const res = await Axios.delete(`/boards/${boardId}/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    callbackFunction(res);
  } catch (error) {
    alert(error.response.data.cause);
  }
};
