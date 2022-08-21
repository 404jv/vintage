import styles from '../styles/Home.module.css';


export function UsersOnline() {

  return (
    <ul className={styles.users}>
      <li>
        <div className={styles.onlineCircle}></div>
        <span>João</span>
      </li>
      <li>
        <div className={styles.onlineCircle}></div>
        <span>Maria</span>
      </li>
    </ul>
  );
}
