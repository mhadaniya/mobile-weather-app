import api from './api';

export const getWeather = async () => {
  try {
    const { data } = await api.get(`/weather`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};