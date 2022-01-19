import './Header.css';
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import bag from "../../assets/green-bag.png"
import cart from "../../assets/empty-cart.png"


class Header extends Component {
    render () {
        return (
            <div className="header">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>All</NavLink>
                    </li>
                    <li>
                        <NavLink to="/clothes" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Clothes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tech" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Tech</NavLink>
                    </li>
                </ul>
                <img className="green-bag" src={bag} alt="green bag"/>
                <div className="nav-right">
                    <a className="currency" href="#">$</a> 
                    <a className="cart"href="#"><img src={cart} alt="Empty Cart" /></a>
                </div>    
            </div>
        )
    }
}

export default Header;