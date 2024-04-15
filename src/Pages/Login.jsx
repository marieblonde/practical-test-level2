import React, { useState, useContext, useNavigate } from 'react'
import './Login.css'
import logo from '../Components/Assets/images/images.jpeg'
import {users} from '../Pages/users'
import {authContext} from '../Context/AuthContextProvider'


export default function Login() {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    const navigate = useNavigate();

    const {updateUser} = useContext(authContext)

    const submit = (e) => {
        e.preventDefault();
       
        const user = users.find(user=> { return user.userName === username && user.password=== password});
        if(user){
          updateUser(user)
          navigate('/')
        }
    }
  return (
    <section class="container">
      <div class="left">
        <button class="back">
          <i class="fa-solid  "></i>
          Back
        </button>
        <div class="logo">
          <img src={logo} height="30px" alt=""/>
        </div>
        <h1>Sign Up</h1>
        <p>Join us to access the lastest products and <br/> product catalog.</p>
        <form id="form" onSubmit={submit}>
          
          <div ><input type="text" placeholder="Enter your last name" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          
          <div ><input type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            
            
          </div>
          
          <button class="btn" type="submit">Sign up</button>
          <p>Already have an account? <span>Sign in</span></p>

        </form>

      </div>
      
    </section>
  )
}
