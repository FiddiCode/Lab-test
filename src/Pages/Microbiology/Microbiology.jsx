import React from 'react'
import ReportTable from '../../Components/ReportTable/ReportTable'
import Header from '../../Components/Header/Header'
import Navbar from "../../Components/Navbar/Navbar";
import './microbiology.css'
import { microbiology } from '../../constants/microbiologyReport'

const Microbiology = () => {
  return (
    <div className='microbiology'>
      <h1>Department of Microbiology</h1>
      <Navbar/>
      <ReportTable reportList={microbiology}/>
    </div>
  )
}

export default Microbiology