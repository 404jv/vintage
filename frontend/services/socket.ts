import io from 'socket.io-client';

const socket = io(process.env.BASE_URL || 'http://localhost:3000');

console.log(process.env.BASE_URL);

export { socket };