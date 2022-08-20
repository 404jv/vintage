import Link from "next/link";
import Router from "next/router";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth";

const Login: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    signIn(username, password);
  }

  return (
    <form onSubmit={handleSubmit} className='formContainer'>
      <h1>Faça seu login para começar a conversar</h1>

      <div className='inputContainer'>
        <label htmlFor="username">Usuário:</label>
        <input
          required
          autoComplete="off"
          type="text"
          id="username"
          name="username"
          onChange={event => setUsername(event.target.value)}
        />
      </div>

      <div className='inputContainer'>
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          onChange={event => setPassword(event.target.value)}
        />
      </div>

      <button className='buttonSubmit'>Entrar</button>
      <Link href="/Create">Criar conta</Link>
    </form>
  );
}

export default Login;
