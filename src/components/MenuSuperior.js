import React, { Component } from "react"
import { Link } from 'react-router-dom';

class MenuSuperior extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/bodycat" className="navbar-brand">Catbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/bodycat" className="nav-link">three
              small cats </Link>
            </li>
            <li className="nav-item">
              <Link to="bigcat" className="nav-link">a big cat</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

}

export default MenuSuperior