import axios from 'axios';

const API_URL = 'http://localhost:8086/api/forms';

export const createForm = (form) => {
  return axios.post(`${API_URL}/create`, form);
};

export const getAllForms = () => {
  return axios.get(`${API_URL}/all`);
};
