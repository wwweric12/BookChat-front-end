import { Axios } from '../Axios';

export const AxiosBoardCategory = async ({ category, setBoardList, searchKeyWord }) => {
  try {
    const res = await Axios.get(`/books/1158081375/boards/${category}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      params: {
        keyword: searchKeyWord,
      },
    });
    setBoardList(res.data.data.results);
  } catch (error) {
    console.log(error);
  }
};
