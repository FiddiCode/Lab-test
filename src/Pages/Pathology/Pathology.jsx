import React from 'react'
import './pathology.css'
import ReportTable from '../../Components/ReportTable/ReportTable'
import Header from '../../Components/Header/Header'
import Navbar from "../../Components/Navbar/Navbar";

import { pathologyReport } from '../../constants/pathologyReports'

const Pathology = () => {
  return (
    <>
    <div className='pathology'>
      {/* <Header/> */}
      <h1>Department of Pathology</h1>
      <Navbar/>
      <ReportTable reportList={pathologyReport}/>

    </div>
    </>
  )
}

export default Pathology