import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/CSS/navbar.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/" >Home</NavLink>
            <NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/blog" >Blog</NavLink>
            <NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/project" >Project</NavLink>
            <NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/service" >Service</NavLink>
            <NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/about" >About</NavLink>
            <NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/contact" >Contact</NavLink>
        </nav>
    );
};

export default Navbar;