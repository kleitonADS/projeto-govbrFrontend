// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const response = await axios.get('http://localhost:8000/api/listagem-usuarios');
      setUsuarios(response.data.data);
    };

    fetchUsuarios();
  }, []);

  return (
    <main className="d-flex flex-fill custom-content">
      <h2>Painel de Controle</h2>
      <table>
        <thead>
          <tr>
            <th>E-mail</th>
            <th>Data de Nascimento</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.email}>
              <td>{usuario.email}</td>
              <td>{usuario.dt_nascimento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Dashboard;
