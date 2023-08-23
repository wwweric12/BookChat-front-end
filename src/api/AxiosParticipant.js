import { Axios } from './Axios';

export const AxiosParticipant = async ({ callbackFunction }) => {
  try {
    const response = await Axios.get('/rooms/visited', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    callbackFunction(response.data);
  } catch (error) {
    return alert(error);
  }
};
