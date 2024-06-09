import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const bloodGroupResults = [
    {
      testName: 'BLOOD GROUPING',
      findings: 'O',
    },
    {
      testName: 'RH(D) TYPING',
      findings: 'POSITIVE',
    },
  ];
    

const BloodGrouping = () => {
  return (
    <div className='blood-grouping'>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
          <TestTable table={bloodGroupResults}/>
          <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default BloodGrouping