import { Axios } from './Axios';

export const AxiosCreatePost = async ({ postTitle, content, boardCategory, isbn }) => {
  try {
    const response = await Axios.post(
      `/books/${isbn}/boards`,
      {
        title: postTitle,
        content,
        boardCategory,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return alert(error);
  }
};
