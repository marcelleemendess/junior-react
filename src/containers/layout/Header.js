import './Header.css';
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import bag from "../../assets/green-bag.png";
import { BsCart2 } from "react-icons/bs";

// import { Query } from "react-apollo";
// import { GET_PRODUCTS } from "../itemQuery"

class Header extends Component {

    render() {
 
        return (

            <div className="header">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className="active">All</NavLink>
                    </li>
                    <li>
                        <NavLink to="/clothes" className="active">Clothes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tech" className="active">Tech</NavLink>
                    </li>
                </ul>
                <img className="green-bag" src={bag} alt="green bag"/>
                <div className="nav-right">
                    <a className="currency" href="google.com">$</a> 
                    <a className="cart" href="/cart"><BsCart2/></a>
                </div>    
            </div>
           
        )
    }
}

export default Header;