import React from 'react'
import './quickEnroll.css'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const QuickEnroll = () => {
      const navigate=useNavigate();

    const handleClose=()=>{
        navigate('/all-patients')
    }

  return (
    <>
    <Navbar/>
      <div className='quick-enroll'>
           <h1>Quick Enrollment</h1>
           <div className='form-container'> 
               <h3>General Details</h3>
                  <form>     
                    <div className='quick-form-section'>
                    <div className='quick-form-field'>
                        <label>Name</label>
                        <input type='text' placeholder='Enter Name'/>
                    </div>
                    <div className='quick-form-field'>
                        <label>Surname</label>
                        <input type='text' placeholder='Enter Surname'/>
                    </div>
                    <div className='quick-form-field'>
                        <label>Date of Birth</label>
                        <input type='date'/>
                    </div>
                    </div>
                   
                   <div className='quick-form-section'>
                   <div className='quick-form-field'>
                        <label>Sex</label>
                        <div className='radio-section'>
                          <div className='radio-field'>
                             <input type='radio' name='gender' value='male'/>
                             <label>Male</label>
                           </div>
                           <div className='radio-field'>
                             <input type='radio' name='gender' value='Female'/>
                             <label>Female</label>
                           </div>
                           <div className='radio-field'>
                             <input type='radio' name='gender' value='other'/>
                             <label>Other</label>
                           </div>
                        </div>       
                    </div>
                    <div className='quick-form-field'>
                        <label>Age</label>
                        <input type='Number' placeholder='Enter Age'/>
                    </div>
                   </div>
                    <div className='quick-form-buttons'>
                        <button className='quick-close-button' onClick={handleClose} >Close</button>
                        <button className='save-button'>Save</button>
                    </div>
                  </form>
           </div>
    </div>
    </>
  
  )
}

export default QuickEnroll