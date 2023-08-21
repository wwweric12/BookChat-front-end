import { Axios } from './Axios';

export const AxiosCreatePost = async (data, isbn) => {
  const { title, content, boardCategory } = data;
  try {
    const response = await Axios.post(`/books/${isbn}/boards`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      title,
      content,
      boardCategory,
    });
    return response.data;
  } catch (error) {
    return alert(error);
  }
};
