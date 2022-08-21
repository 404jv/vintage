import styles from '../styles/Home.module.css';

export function Chat() {
  return (
    <>
      <ul className={styles.chat}>
        <li>
          <span className={styles.blueText}>João:</span>
          <span className={styles.message}>Oi</span>
        </li>

        <li>
          <span className={styles.redText}>Maria:</span>
          <span className={styles.message}>Hello</span>
        </li>
      </ul>

      <div className={styles.inputMessageDiv}>
        <textarea
          cols={30}
          rows={10}
          placeholder="Digite sua mensagem"
          className={styles.inputMessage}
        ></textarea>

        <button className={styles.sendButton}>Enviar</button>
      </div>
    </>
  );
}
