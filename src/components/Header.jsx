// src/components/Header.js
import React from 'react';

const Header = ({ onToggleSidebar, loggedIn, onLogout, toggleSidebar  }) => {
  return (
    
    <header class="br-header mb-4" id="header" data-sticky="data-sticky">
  <div className="container-lg">
    <div className="header-top">
      <div className="header-logo"><img src="./govbr-logo.png" alt="logo"/><span class="br-divider vertical"></span>
        <div className="header-sign">Assinatura</div>
      </div>
      <div className="header-actions">
        <div className="header-links dropdown">
          <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido"><i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <div className="br-list">
            <div className="header">
              <div className="title">Acesso Rápido</div>
            </div><a className="br-item" href="javascript:void(0)">Link de acesso 1</a><a class="br-item" href="javascript:void(0)">Link de acesso 2</a><a class="br-item" href="javascript:void(0)">Link de acesso 3</a><a class="br-item" href="javascript:void(0)">Link de acesso 4</a>
          </div>
        </div><span className="br-divider vertical mx-half mx-sm-1"></span>
        <div className="header-functions dropdown">
          <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Funcionalidades do Sistema"><i class="fas fa-th" aria-hidden="true"></i>
          </button>
          <div className="br-list">
            <div className="header">
              <div className="title">Funcionalidades do Sistema</div>
            </div>
            <div className="br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 1"><i class="fas fa-chart-bar" aria-hidden="true"></i><span class="text">Funcionalidade 1</span>
              </button>
            </div>
            <div className="br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 2"><i class="fas fa-headset" aria-hidden="true"></i><span class="text">Funcionalidade 2</span>
              </button>
            </div>
            <div className="br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 3"><i class="fas fa-comment" aria-hidden="true"></i><span class="text">Funcionalidade 3</span>
              </button>
            </div>
            <div className="br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 4"><i class="fas fa-adjust" aria-hidden="true"></i><span class="text">Funcionalidade 4</span>
              </button>
            </div>
          </div>
        </div>
        <div className="header-search-trigger">
          <button className="br-button circle" type="button" aria-label="Abrir Busca" data-toggle="search" data-target=".header-search"><i class="fas fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="header-login">
          <div className="header-sign-in">
            <button className="br-sign-in small" type="button" data-trigger="login"><i class="fas fa-user" aria-hidden="true"></i><span class="d-sm-inline">Entrar</span>
            </button>
          </div>
          <div className="header-avatar"></div>
        </div>
      </div>
    </div>
    <div className="header-bottom">
      <div className="header-menu">
        <div className="header-menu-trigger">
        <button 
        id="header-menu-trigger" 
        className="header-menu-trigger" 
        onClick={toggleSidebar} // Chama a função para alternar o estado do sidebar
        aria-label="Abrir Menu"
      ><i className="fas fa-bars" aria-hidden="true"></i>
          </button>
        </div>
        <div className="header-info">
          <div className="header-title">Título do Header</div>
          <div className="header-subtitle">Subtítulo do Header</div>
        </div>
      </div>
      <div className="header-search">
        <div className="br-input has-icon">
          <label for="searchbox-7548">Texto da pesquisa</label>
          <input id="searchbox-7548" type="text" placeholder="O que você procura?"/>
          <button class="br-button circle small" type="button" aria-label="Pesquisar"><i class="fas fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <button class="br-button circle search-close ml-1" type="button" aria-label="Fechar Busca" data-dismiss="search"><i class="fas fa-times" aria-hidden="true"></i>
        </button>
        <div className="header-right">
        {loggedIn ? (
          <>
            <span>Bem-vindo, usuário!</span>
            <button onClick={onLogout}>Sair</button>
          </>
        ) : (
          <span>Por favor, faça login</span>
        )}
      </div>
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;
