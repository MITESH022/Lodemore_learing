import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
 <section id="nav-bar">

<nav className="navbar navbar-expand-lg navbar-light ">
    <Link to="/" className="navbar-brand" href="#">Faltu</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <Link to="/" className="nav-link" href="#top">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/api" className="nav-link" href="#services">API</Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link" href="#services">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="/paragraph_generator" className="nav-link" href="#services">paragenerator</Link>
        </li>
        <li className="nav-item">
          <Link to="/accordion" className="nav-link" href="#services">Accordions</Link>
        </li>
        <li className="nav-item">
          <Link to="/tour" className="nav-link" href="#services">Tour</Link>
        </li>
       
      
      </ul>
    </div>
  </nav>
</section>
   
  )
}

export default Header