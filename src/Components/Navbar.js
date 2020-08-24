import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {


    return (
        <nav>
            <div className="title">
                <img src={logo} className="logosite"></img>
                <h2>Enlightenment</h2>
            </div>

            <ul className="nav_Links">
                <li><Link to="/" >Home</Link></li>
                <div className="dropdown">
                    <li><Link to className="dropbtn">Categories</Link><i class="fa fa-caret-down"></i></li>
                    <div className="dropdown_content">
                        <a href="#">Web development</a>
                        <a href="#">Buisness</a>
                        <a href="#">Photography</a>
                        <a href="#">Design</a>
                        <a href="#">Personal Development</a>
                        <a href="#">Marketing</a>
                        <a href="#">Lifestyle</a>
                    </div>
                </div>
                <li><Link to="/about" className="links">About</Link></li>
                <li><Link to="/contact" className="links">Contact</Link></li>
            </ul>
            <button className="login">Login</button>

        </nav>
    );
}


export default Navbar;
