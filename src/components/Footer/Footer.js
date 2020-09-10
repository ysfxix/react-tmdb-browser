import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {              
        };
    }

    render() { 
        return ( 
            <footer className="footer">  
                <nav className="navbar navbar-dark company-background justify-content-between">
                    <a className="navbar-brand">Footer</a>
                    <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>             
            </footer>
         );
    }
}
 
export default Footer;