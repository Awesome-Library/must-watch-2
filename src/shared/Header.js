import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="nav has-shadow">
    <div className="container">
      <div className="nav-left">
        <Link to="/" className="nav-item is-brand">
          <h1 className="title">must-watch</h1>
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/minha-lista" className="nav-item is-tab">
          minha lista de filmes
        </Link>
        <div className="nav-item">
          <Link to="/minha-lista/adicionar-filme" className="button is-primary">
            adicionar um filme
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Header;
