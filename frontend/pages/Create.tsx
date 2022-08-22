import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { api } from "../services/api";

const Create: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await api.post('/users/create', {
        username,
        password,
        confirmPassword,
      });

      alert('Usuário criado com sucesso!');
      Router.push('/Login')
    } catch (error: any) {
      const message = error.response.data.message;

      if (message === 'password must be equal to confirm password') {
        alert('A senha precisa ser igual a confirmação de senha');
        return;
      }

      if (message === 'username already exists') {
        alert('Usuário já existente, tente outro nome ou faça login');
        return;
      }

      alert('Erro ao criar usuário, tente novamente');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='formContainer'>
      <h1>Crie sua conta</h1>

      <div className='inputContainer'>
        <label htmlFor="username">Usuário:</label>
        <input
          required
          autoComplete="off"
          type="text"
          id="username"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>

      <div className='inputContainer'>
        <label htmlFor="password">Senha:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className='inputContainer'>
        <label htmlFor="confirmPassword">Confirmar senha:</label>
        <input
          required
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>

      <button type="submit" className='buttonSubmit'>Criar conta</button>
      <Link href="/Login">Logar</Link>
    </form>
  )
}

export default Create;
