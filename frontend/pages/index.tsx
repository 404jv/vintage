import type { NextPage } from 'next'
import { Chat } from '../components/Chat';
import { UsersOnline } from '../components/UsersOnline';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <UsersOnline />

      <Chat />
    </div>
  )
}

export default Home;
