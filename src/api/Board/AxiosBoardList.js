import { Axios } from '../Axios';

export const AxiosBoardList = async ({ searchKeyWord, setBoardList, location }) => {
  try {
    const res = await Axios.get(`/books/${location.state.isbn}/boards`, {
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
