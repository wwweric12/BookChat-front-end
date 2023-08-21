import { Axios } from '../Axios';

export const AxiosBoardCategory = async ({ category, setBoardList, searchKeyWord, isbn }) => {
  try {
    const res = await Axios.get(`/books/${isbn}/boards/${category}`, {
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
