import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const hcvTestResult = [
    {
      testName: 'HCV',
      findings: 'NEGATIVE',
    },
  ];  

const HCV = () => {
  return (
    <div>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
           <TestTable table={hcvTestResult}/>
           <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default HCV