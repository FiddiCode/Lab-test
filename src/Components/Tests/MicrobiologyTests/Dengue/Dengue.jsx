import React from 'react'
import './dengue.css'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'
import TestTable from '../../../TestTable/TestTable'

const dengueTestData = [
  {
    testName: 'DENGUE NS1',
    findings: 'Negative',
    units: 'Negative/Positive/Weekly Positive',
  },
  {
    testName: 'DENGUE IGG',
    findings: 'Negative',
    units: 'Negative/Positive/Weekly Positive',
  },
  {
    testName: 'DENGUE IGM',
    findings: 'Negative',
    units: 'Negative/Positive/Weekly',
  },
];

const Dengue = () => {
  return (
    <div className='dengue'>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Microbiology</h1>
        <div className='test-table-container'>
            <TestTable table={dengueTestData}/>
            <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default Dengue