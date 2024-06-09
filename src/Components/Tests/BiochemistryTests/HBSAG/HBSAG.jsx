import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'
import TestTable from '../../../TestTable/TestTable'

const TestResults = [
    {
      testName: 'HIV 1 & 2',
      findings: '',
    },
    {
      testName: 'HBS AG I',
      findings: 'NEGATIVE',
    },
  ];
  

const HBSAG = () => {
  return (
    <div>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
          <TestTable table={TestResults}/>
          <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default HBSAG;