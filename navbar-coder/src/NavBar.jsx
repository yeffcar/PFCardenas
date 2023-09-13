import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'Activeoption nav-link' : 'nav-link')}
        >
          Home
        </NavLink>
      </div>

      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink
            to="/category/celular"
            className={({ isActive }) => (isActive ? 'Activeoption nav-link' : 'nav-link')}
            activeclassname="active"
          >
            Celular
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/category/pc"
            className={({ isActive }) => (isActive ? 'Activeoption nav-link' : 'nav-link')}
            activeclassname="active"
          >
            PC
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/category/tablet"
            className={({ isActive }) => (isActive ? 'Activeoption nav-link' : 'nav-link')}
            activeclassname="active"
          >
            Tablet
          </NavLink>
        </li>
      </ul>

      <CartWidget itemCount={2} />
    </nav>
  );
};

export default NavBar;
