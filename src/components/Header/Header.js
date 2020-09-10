import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {              
        };
    }

    render() { 
        return ( 
          <header>
            <nav className="navbar navbar-expand-md navbar-dark company-background fixed-top">
            <a className="navbar-brand" href="#">MovieDB</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Weather</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Videos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">About Us</NavLink>
                </li>
                {/* 
                // Disabled Link
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li> 
                */}
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</NavLink>
                  <div className="dropdown-menu" aria-labelledby="dropdown01">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
          </header>

                // <NavLink to="/">Home</NavLink>             
                // <NavLink to="/">Weather</NavLink>             
                // <NavLink to="/">Videos</NavLink>             
                // <NavLink to="/">About Us</NavLink>             
                // <NavLink to="/">Contact Us</NavLink>  
         );
    }
}
 
export default Header;