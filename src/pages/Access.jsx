// src/pages/Access.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Access = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/acessar', {
        email,
        senha
      });

      if (response.data.status === 'success') {
        onLogin(response.data.data.email);
        toast.success(response.data.message);
        navigate('/painel');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Erro ao acessar. Tente novamente!');
    }
  };

  return (
    <main>
      <h2>Página de Acesso</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Acessar</button>
      </form>
    </main>
  );
};

export default Access;
