import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
     
      <div className="navbar-brand">
        <h2>Logo</h2>
      </div>

      <ul className="navbar-nav mx-auto"> 
        <li className="nav-item">
          <a className="nav-link" href="#">Botón 1</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link" href="#">Botón 2</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link" href="#">Botón 3</a>
        </li>
      </ul>

      <CartWidget itemCount={2} />
    </nav>
  );
};

export default NavBar;
