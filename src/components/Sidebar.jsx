// src/components/Sidebar.js
import './Sidebar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ loggedIn, onLogout, isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
       <button onClick={toggleSidebar} className="sidebar-close-btn">Fechar</button>

      <nav className="menu-body" >
        <ul>
          <li className="br-item"><Link to="/acesso">Acesso</Link></li>
          <li className="br-item"><Link to="/registro">Registro</Link></li>
          {loggedIn && <li><Link to="/painel">Painel</Link></li>}
        </ul>
        
        {loggedIn && (
          <button onClick={onLogout}>Encerrar Sessão</button>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
