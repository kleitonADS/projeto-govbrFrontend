// src/pages/Access.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext'; 

const Access = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/acessar', {
        email,
        senha
      });

      if (response.data.status === 'success') {
        onLogin(response.data.data.email);
        login(response.data.data.email); 
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
    <main className="d-flex flex-fill custom-content" >
      <h2>Página de Acesso</h2>
      <form onSubmit={handleLogin}>
        <div class="col-sm-5 col-lg-2">
           <div class="br-input">
         
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

</div>
</div>

<div class="col-sm-5 col-lg-2">
           <div class="br-input">
         
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        </div>
        </div>
        <br />
        <button className="br-button primary mr-3" type="submit">Acessar</button>
      </form>
    </main>
  );
};

export default Access;
