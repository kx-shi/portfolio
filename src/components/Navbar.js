import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navlink.css';

export default class Navbar extends Component {
    render () {
        return (
            <section id="navbar">
                <nav>
                    <NavLink to="/home" activeClassName="title-active" className="nav-title">kx.shi</NavLink>
                    <div class="nav-right">
                        <NavLink to="/portfolio" activeClassName="active" className="nav-link">projects</NavLink>
                        <NavLink to="/about" activeClassName="active" className="nav-link">about</NavLink>
                        <NavLink to="/contact" activeClassName="active" className="nav-link">contact</NavLink>
                    </div>
                </nav>
            </section>
        )
    }
}
