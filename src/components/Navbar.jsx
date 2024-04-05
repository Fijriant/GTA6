import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://fontmeme.com/grand-theft-auto-font/">
          <img src="https://fontmeme.com/permalink/240329/408abd7d59b7d0058060bd6f71308b20.png" alt="grand-theft-auto-font" border="0" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-3 fw-bolder shadow rounded">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item me-3 fw-bolder shadow rounded">
              <NavLink className="nav-link active" to="/content">Content</NavLink>
            </li>
            <li className="nav-item me-3 fw-bolder shadow rounded">
              <NavLink className="nav-link active" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
