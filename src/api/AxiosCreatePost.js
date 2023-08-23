import { Axios } from './Axios';

export const AxiosCreatePost = async ({ postTitle, content, boardCategory, isbn, imageUrl }) => {
  try {
    const response = await Axios.post(
      `/books/${isbn}/boards`,
      {
        title: postTitle,
        content,
        boardCategory,
        imageUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};
