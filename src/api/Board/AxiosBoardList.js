import { Axios } from '../Axios';

export const AxiosBoardList = async ({ searchKeyWord, callbackFunction, location, page }) => {
  try {
    const res = await Axios.get(`/books/${location.state.isbn}/boards`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      params: {
        keyword: searchKeyWord,
        page,
      },
    });

    callbackFunction(res.data);
  } catch (error) {
    console.log(error);
    alert(error.response.data.cause);
  }
};
