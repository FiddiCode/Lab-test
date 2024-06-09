import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const OGGTResults = [
    {
      testName: 'Fasting Blood Sugar',
      findings: 97,
      units: 'mg/dl',
      normalValues: '70 - 110 mg/dl',
    },
    {
      testName: '1st Hour Blood Sugar',
      findings: 100,
      units: 'mg/dl',
      normalValues: '110 - 160 mg/dl',
    },
    {
      testName: '2nd Hour Blood Sugar',
      findings: 84,
      units: 'mg/dl',
      normalValues: '110 - 160 mg/dl',
    },
  ];
  

const OGTT = () => {
  return (
    <div>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
            <TestTable table={OGGTResults}/>
            <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default OGTT