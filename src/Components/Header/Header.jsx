import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate()

  const  handleSignOut=()=>{
      localStorage.removeItem('token');
      navigate('/')
    }

  return (
    <div className='header'>
      <div>
      <img src={logo} alt='logo'/>
      <h1>Matrix</h1>
      </div>
      <div>
      <button onClick={handleSignOut}>SignOut</button>
      </div>
    </div>
  )
}

export default Header;