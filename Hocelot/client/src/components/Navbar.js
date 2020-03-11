import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => (
<nav className="navbar ">

    <ul className="navbar-nav">
        <li className="nav-item">
               <NavLink activeClassName="nav-item--active" className="nav-link" to="/" exact>
                    <h5 className="text">Proyect Home</h5>
               </NavLink>
        </li>

        <li className="nav-item">
               <NavLink activeClassName="nav-item--active" className="nav-link" to="/quality">
                  <h5>Quality</h5>
               </NavLink>
        </li>

        <li className="nav-item">
               <NavLink activeClassName="nav-item--active" className="nav-link" to="/enrichment">
                  <h5>Enrichment</h5>
               </NavLink>
        </li>

        <li className="nav-item">
               <NavLink activeClassName="nav-item--active" className="nav-link" to="/model">
                  <h5>Model Execution</h5>
               </NavLink>
        </li>

        <li className="nav-item">
               <NavLink activeClassName="nav-item--active" className="nav-link" to="/">
                  <h5>Business Case</h5>
               </NavLink>
        </li>

        <li className="nav-item">
               <NavLink activeClassName="nav-item--active" className="nav-link" to="/simulation">
                    <h5>Simulation</h5>
               </NavLink>
        </li>
    </ul>

</nav>
)

export default Navbar