// src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');
  const [dtNascimento, setDtNascimento] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/registrar', {
        email,
        dt_nascimento: dtNascimento,
        senha
      });

      if (response.data.status === 'success') {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Erro ao registrar. Tente novamente!');
    }
  };

  return (
    <main className="d-flex flex-fill custom-content" >
      <h2>Página de Registro</h2>
      <form onSubmit={handleRegister}>

      <div class="col-sm-5 col-lg-2">
      <div class="br-input">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        </div>


        <div class="col-sm-5 col-lg-2">
           <div class="br-input">
        <input
          type="date"
          placeholder="Data de Nascimento"
          value={dtNascimento}
          onChange={(e) => setDtNascimento(e.target.value)}
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
        <button className="br-button primary mr-3" type="submit">Registrar</button>
      </form>
    </main>
  );
};

export default Register;
