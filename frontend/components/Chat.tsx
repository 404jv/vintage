import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth';
import { api } from '../services/api';
import { socket } from '../services/socket';
import styles from '../styles/Home.module.css';
import { playSongNewMessage } from '../utils/playSongs';

type Message = {
  id: string;
  text: string;
  user: {
    id: string;
    username: string;
  }
}

export function Chat() {
  const { user: userLogged } = useContext(AuthContext);

  const [messages, setMessages] = useState<Message[]>([]);
  const [messageToSend, setMessageToSend] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  socket.on('new_message', (newMessage: Message) => {
    if (userLogged?.id !== newMessage.user.id) {
      setMessages([newMessage, ...messages]);
      playSongNewMessage();
    }
  });

  async function handleSendMessage() {
    if (!messageToSend.trim()) return;

    setIsSendingMessage(true);

    try {
      const response = await api.post('/messages/create', {
        text: messageToSend,
      });

      setMessages([response.data, ...messages]);
      setMessageToSend('');
    } catch (error) {
      console.log(error);
    } finally {
      setIsSendingMessage(false);
    }
  }

  useEffect(() => {
    api.get('/messages').then((response) => {
      setMessages(response.data);
    });
  }, []);

  return (
    <>
      <ul className={styles.chat}>
        {messages.map((message) => (
          <li key={message.id}>
            <span className={userLogged?.id === message.user.id ? styles.blueText : styles.redText}>
              {`${message.user.username}:`}
            </span>
            <span className={styles.message}>{message.text}</span>
          </li>
        ))}
      </ul>

      <div className={styles.inputMessageDiv}>
        <textarea
          cols={30}
          rows={10}
          placeholder="Digite sua mensagem"
          className={styles.inputMessage}
          onChange={(event) => setMessageToSend(event.target.value)}
          value={messageToSend}
          disabled={isSendingMessage}
        >
        </textarea>

        <button
          disabled={isSendingMessage}
          onClick={handleSendMessage}
          className={styles.sendButton}
        >Enviar</button>
      </div>
    </>
  );
}
