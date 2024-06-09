import React, { useState } from 'react'
import './book.css'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Consultation from '../../Sections/Consultation/Consultation';
import VisitRecord from '../../Sections/VisitRecord/VisitRecord'
import HealthScore from '../../Sections/HealthScore/HealthScore'

const Book = () => {
    const [sections, setSections]=useState({
        consultation:true,
        visit_record:false,
        health_score:false
    })

    const handleSections=(name)=>{
        setSections({
            consultation:false,
            visit_record:false,
            health_score:false,
            [name]:true
        })
    }
    console.log(sections);

  
  return (
       <>
        <Header/>
        <Navbar/>
        <div className='book'>
            <h2>Patient Details</h2>
            <div className='pt-details'>
                <div className='profile'>
                    <img src='./images/profile.png' alt='profile'/>
                    <span>Name</span>
                    <span>Age</span>
                </div>
                <div className='detail'>
                    <div className='a'></div>
                    <div className='detail-table'>
                        <table>
                           <tbody>
                            <tr>
                                <td>
                                <div>Gender</div>
                                <div>Male</div>
                                </td>
                                <td>Insurance</td>
                                <td>Marital Status</td>
                                <td>Address</td>
                                <td>Patient Id</td>
                                <td>Allergies</td>
                            </tr>
                            <tr>
                                <td>Blood Type</td>
                                <td></td>
                                <td>Smoking Info</td>
                                <td>Alcohol Info</td>
                                <td>Health Card</td>
                                <td></td>
                                 
                            </tr>
                           </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div className='button-section'>
                <button className={(sections.consultation) ? "active" : ""} onClick={()=>{handleSections('consultation')}}>Consultation</button>
                <button className={(sections.visit_record) ? "active" : ""} onClick={()=>{handleSections('visit_record')}}>Patient Visit Record</button>
                <button className={(sections.health_score) ? "active" : ""} onClick={()=>{handleSections('health_score')}}>Health Score</button>
            </div>

            {sections.consultation && ( <Consultation/>)}
            {sections.visit_record && ( <VisitRecord/>)}
            {sections.health_score && ( <HealthScore/>)}
        </div>
    </>
  )
}

export default Book;