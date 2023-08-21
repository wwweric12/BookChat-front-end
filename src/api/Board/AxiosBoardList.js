import { Axios } from '../Axios';

export const AxiosBoardList = async ({ searchKeyWord, setBoardList }) => {
  try {
    const res = await Axios.get(`/books/1158081375/boards`, {
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
    alert(error.response.data.cause);
  }
};
