import React from 'react'
import './biochemistry.css'
import { biochemistry } from '../../constants/biochemistryReport'
import ReportTable from '../../Components/ReportTable/ReportTable'
import Header from '../../Components/Header/Header'
import Navbar from "../../Components/Navbar/Navbar";

const Biochemistry = () => {
  return (
    <div className='biochemistry'>
      <h1>Department of Biochemistry</h1>
      <Navbar/>
      <ReportTable reportList={biochemistry}/>
    </div>
  )
}

export default Biochemistry