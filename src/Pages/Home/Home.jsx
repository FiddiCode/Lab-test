import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Card from '../../Components/Card/Card'
import { redirect } from 'react-router-dom'


const Home = () => {
  return (
       <>
       <Header/>
       <Navbar/>
       <div className='home'>
            <h1>Welcome Matrix !</h1>
          <h3>Please click the section icon you would like to use</h3>

        <div className='cards'>
             <Card title='All Patients' imgSrc={'./images/patients.png'} redirect='/all-patients'/>
             <Card title='Book Report' imgSrc={'./images/booking.png'} redirect='/book'/>
             <Card title='Central Lab' imgSrc={'./images/permission.png'} redirect='/central-lab'/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
        </div>

       </div>
    </>
  )
}

export default Home;