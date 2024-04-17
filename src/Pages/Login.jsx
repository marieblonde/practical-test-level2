import React, { useState, useNavigate, useContext } from 'react'
import './Login.css'
import logo from '../Components/Assets/images/images.jpeg'
import facebook from '../Components/Assets/images/facebookimage.png'
import google from '../Components/Assets/images/googleimage.png'
import { users } from './infos'
// import { useNavigate } from 'react-router-dom'
import { authContext } from '../Context/AuthContextProvider'


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="formss">

      <div className="form">
        <div class="logo">
          <img src={logo} height="30px" alt="" />
          <h1>Login</h1>
        </div>

        <p>Join us to access the lastest products and <br /> product catalog.</p>
        <form id="form" >
          <input type="text" placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button className="btn" type="submit" >Sign up</button>

        </form>
        <p className='test'>Or login using</p>
        <div className='social-media'>
          <div className='facebook'><img src={facebook} alt="" width={35} /></div>
          <div className='google'><img src={google} alt="" width={50} /></div>
        </div>
      </div>
    </section>



  )
}
