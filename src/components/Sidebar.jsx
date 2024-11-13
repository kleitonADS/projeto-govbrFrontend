
import './Sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ loggedIn, onLogout, isOpen, toggleSidebar }) => {
  return (
 
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
       <button onClick={toggleSidebar} className="sidebar-close-btn">Fechar</button>
       <div className="br-menu push active large">
       <div className="menu-container position-static">
       <div className="menu-panel h-auto position-static shadow-lg-right">
     
            <nav className="menu-body" role="tree" >
                 <a className="menu-item divider" href="javascript: void(0)" role="treeitem">
                <span className="icon">
                    <i className="fas fa-bell" aria-hidden="true"></i>
                </span>
                <span className="content"><Link to="/acesso">Acesso</Link></span>
          </a>


         <a className="menu-item divider" href="javascript: void(0)" role="treeitem">
                <span className="icon">
                    <i className="fas fa-bell" aria-hidden="true"></i>
                </span>
                <span className="content"><Link to="/registro">Registro</Link></span>
         </a>

         {loggedIn && <a className="menu-item divider" href="javascript: void(0)" role="treeitem">
                <span className="icon">
                    <i className="fas fa-bell" aria-hidden="true"></i>
                </span>
                <span className="content"><Link to="/painel">Painel</Link></span>
         </a>}

      </nav>
          
      {loggedIn && (
        
                <button className="br-button primary mr-3" type="button" onClick={onLogout}>Encerrar Sessão</button>
                )}
      </div>
      </div>
      </div>
    </div>


  );
};

export default Sidebar;
