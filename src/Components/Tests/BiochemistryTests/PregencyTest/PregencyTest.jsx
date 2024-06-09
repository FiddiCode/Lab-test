import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const pregnancyTestResult = [
    {
      testName: 'URINE FOR PREGNANCY',
      findings: 'NEGATIVE',
    },
  ];
  

const PregencyTest = () => {
  return (
    <div>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
           <TestTable table={pregnancyTestResult }/>
           <TestSideSection/>
        </div>
        <TestButtonSection/>

    </div>
  )
}

export default PregencyTest