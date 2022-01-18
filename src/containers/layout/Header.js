import './Header.css';
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import bag from "../../assets/green-bag.png"
import cart from "../../assets/empty-cart.png"


class Header extends Component {
    render () {
        return (
            <div className="nav">
                <ul>
                    <li className="nav-1">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>All</NavLink>
                    </li>
                    <li className="nav-2">
                        <NavLink to="/clothes" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Clothes</NavLink>
                    </li>
                    <li className="nav-3">
                        <NavLink to="/tech" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Tech</NavLink>
                    </li>
                    <li className="nav-4"> 
                        <img src={bag} alt="green bag"/>    
                    </li>
                    <li className="nav-5">
                        $
                    </li>
                    <li className="nav-6">
                            <img src={cart} alt="Empty Cart"/>   
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;