import React from 'react'
import './test.css'
import TestForm from '../../Components/TestForm/TestForm'
import { useLocation } from 'react-router-dom'

const Test = () => {
  const location=useLocation()
     console.log(location)

  return (
    <div className='test'>
        <TestForm/>
        
        </div>
  )
}

export default Test;