import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AccessibleIcon from '@mui/icons-material/Accessible';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Navbar = () => {

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to="/home" className='nav-link' activeClassName="active">
             <HomeIcon/>Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/all-patients"  className='nav-link' activeClassName="active">
           <AccessibleIcon/> All Patients
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports"  className='nav-link' activeClassName="active">
            <SummarizeIcon/> Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/central-lab" className='nav-link' activeClassName='active'>
          <AssessmentIcon/> Lab Report
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;