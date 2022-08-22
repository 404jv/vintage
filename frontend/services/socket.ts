import io from 'socket.io-client';

const socket = io('https://vintage-backend.herokuapp.com/');

console.log(process.env.BASE_URL);

export { socket };