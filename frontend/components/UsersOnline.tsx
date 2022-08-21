import styles from '../styles/Home.module.css';

import { socket } from '../services/socket';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth';
import { playSongNewUserOnline } from '../utils/playSongs';

type User = {
  id: string;
  username: string;
  socketId?: string;
}

export function UsersOnline() {
  const [users, setUsers] = useState<User[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    socket.on('users_online', (users: User[]) => {
      setUsers(users);
      playSongNewUserOnline();
    });

    if (user && users.includes(user)) return;

    socket.emit('connection', user);
  }, []);

  return (
    <ul className={styles.users}>
      {
        users?.map((user) => (
          <li key={user.id}>
            <div className={styles.onlineCircle}></div>
            <span>{user.username}</span>
          </li>
        ))
      }
    </ul>
  );
}
