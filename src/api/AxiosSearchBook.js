import { Axios } from './Axios';

export const AxiosSearchBook = async ({ searchQuery, option }) => {
  try {
    const response = await Axios.get('/books', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      params: {
        query: searchQuery,
        searchField: option,
      },
    });
    return response.data;
  } catch (error) {
    return alert(error);
  }
};
