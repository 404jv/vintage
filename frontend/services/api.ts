import axios from 'axios';

console.log('process.env.BASE_URL');
console.log(process.env.NEXT_PUBLIC_BASE_URL);

export const api = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:3000',
});
