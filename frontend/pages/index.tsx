import type { NextPage } from 'next'
import { useContext } from 'react';
import { Chat } from '../components/Chat';
import { UsersOnline } from '../components/UsersOnline';
import { AuthContext } from '../contexts/auth';

import styles from '../styles/Home.module.css';


const Home: NextPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      {user && (
        <>
          <UsersOnline />

          <Chat />
        </>
      )}
    </div>
  )
}

export default Home;
