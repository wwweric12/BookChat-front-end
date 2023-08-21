import { Axios } from './Axios';

export const AxiosSearchBook = async ({ searchQuery, test }) => {
  try {
    const response = await Axios.get('/books', {
      params: {
        query: searchQuery,
        searchField: test,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data;
  } catch (error) {
    return alert(error);
  }
};
