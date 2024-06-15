import React from 'react'
import './login.css'
import logo from '../../assets/profile.png'
import email from '../../assets/email.svg'
import password from '../../assets/password.svg'
import arrow from '../../assets/double-arrow.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const navigate=useNavigate();
    const [data,setData]=useState({
        email:"",
        password:""
    });

    const handleData=(e)=>{
          setData({
            ...data,
            [e.target.name]:e.target.value
          })
    } 

    const handleLogin=()=>{
        navigate('/home')
    }

  return (
    <div className='login'>
       <div className='container'>
        <div className='box1'>
            <h1>Login to the User Panel</h1>
            <h3>Please use your credentials to login.</h3>
            <button>Register Hospital</button>
        </div>
        <div className='box2'>
            <div className='logo'>
                <img src={logo} alt="" width="80px"/>
            </div>

            <div className='credentials'>
                <div className='fields'>
                <img src={email} alt='' />
                    <input type="email" name='email' placeholder="Enter Email" onChange={handleData}/>
                </div>
                
                <div className='fields'>
                    <img src={password}  alt='' />
                    <input type="password" name='password' placeholder="Password" onChange={handleData}/>
                </div>
                
                <a href="#">Forgot Password?</a>
                <button className='login-button' onClick={handleLogin}>Login<img src={arrow}/></button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Login
