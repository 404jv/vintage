import io from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');

export { socket };