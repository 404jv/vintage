import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://vintage-backend.herokuapp.com',
});
