import axios from 'axios';

const API_URL = 'http://localhost:8086/api/giftcards';

export const convertPointsToGiftCard = (userId, points) => {
  return axios.post(`${API_URL}/convert`, null, { params: { userId, points } });
};

export const getGiftCardsByUser = (userId) => {
  return axios.get(`${API_URL}/user/${userId}`);
};

