import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/images/images.jpeg'
import cart from '../Assets/images/png-transparent-shopping-cart-software-online-shopping-computer-icons-e-commerce-add-to-cart-button-angle-text-service.png'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const [navMenu, setNavMenu] = useState('home')
    const Navigate= useNavigate()
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="" width='30px'/>
            <p>LOGO</p>
        </div>
        <ul className='navbar-menu'>
            <li onClick={()=>{setNavMenu('home')}}>HOME {navMenu==='home'?<hr />:<></>} </li>
            <li onClick={()=>{setNavMenu('about')}}>ABOUT {navMenu==='about'?<hr />:<></>}</li>
            <li onClick={()=>{setNavMenu('jewelery')}}>JEWELERY {navMenu==='jewelery'?<hr />:<></>}</li>
            <li onClick={()=>{setNavMenu('shopping')}}>SHOPPING {navMenu==='shopping'?<hr />:<></>}</li>
            <li onClick={()=>{setNavMenu('cloth')}}>CLOTH {navMenu==='cloth'?<hr />:<></>}</li>
        </ul>
        <div className="cart">
            <button onClick={()=>Navigate('/login')}> Login</button>
            <img src={cart} alt="" width='30px'/>
            <p className='cart-task'>0</p>
        </div>
    </div>
  )
}
