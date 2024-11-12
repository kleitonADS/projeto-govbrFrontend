import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Access from './pages/Access';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@govbr-ds/core/dist/core.min.js';
import '@govbr-ds/core/dist/core.min.css';
import './App.css'; // Importe o arquivo CSS

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado da sidebar
  const navigate = useNavigate();

  const handleLogin = (email) => {
    setLoggedIn(true);
    setUserEmail(email);
    navigate('/painel');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserEmail('');
    navigate('/acesso');
  };

  // Função para alternar o estado da sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

      <div className={`template-base ${isSidebarOpen ? 'sidebar-open' : ''}`}>

        <Header userEmail={userEmail} loggedIn={loggedIn} onLogout={handleLogout} toggleSidebar={toggleSidebar} />
        <Sidebar loggedIn={loggedIn} onLogout={handleLogout} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        <Routes>
          <Route path="/acesso" element={<Access onLogin={handleLogin} />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/painel" element={loggedIn ? <Dashboard /> : <Access onLogin={handleLogin} />} />
        </Routes>

        <ToastContainer />
      </div>

  );
};

export default App;
