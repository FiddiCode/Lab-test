import React from 'react'
import {Link} from 'react-router-dom'
import './testTopSection.css'

const TestTopSection = () => {
  return (
    <div className="top-section">
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'500px'}}>
              <b>Lab Report Generation</b>
              <b>User:<strong>Fardeen</strong></b>
        </div>
        <div>
            <Link to='/pathology' className='go-back-button'>Go Back</Link>
        </div>
    </div>
  )
}

export default TestTopSection;