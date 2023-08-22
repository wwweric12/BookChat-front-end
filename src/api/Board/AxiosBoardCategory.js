import { Axios } from '../Axios';

export const AxiosBoardCategory = async ({ category, callbackFunction, searchKeyWord, location, page }) => {
  try {
    const res = await Axios.get(`/books/${location.state.isbn}/boards/${category}`, {
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
    alert(error.response.data.cause);
  }
};
