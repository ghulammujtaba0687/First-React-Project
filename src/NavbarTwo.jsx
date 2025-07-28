import React from 'react'
import { NavLink, Outlet } from 'react-router'
import './index.css'
import FooterTwo from "./FooterTwo";

const NavbarTwo = () => {
  return (
    <>
    <header className='header'>
        <div className='logo'>
            <h1>Logo <span>Two</span></h1>
        </div>
        <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Login</NavLink>
        <NavLink to="/signup" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Signup</NavLink>
        <NavLink to="/dynamic-users" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Dynamic Users</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
      </nav>
    </header>
    <Outlet />
    <FooterTwo />
    </>
  ) 
}

export default NavbarTwo