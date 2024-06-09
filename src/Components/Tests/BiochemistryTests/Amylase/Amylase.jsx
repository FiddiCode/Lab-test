import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const seramAmylaseAndLipaseResults = [
    {
      testName: 'SERAM AMYLASE',
      findings: 89,
      units: 'U/L',
      normalValues: 'upto 90 U/L',
    },
    {
      testName: 'Serum Lipase',
      findings: 86,
      units: 'U/L',
      normalValues: 'upto 60 U/L',
    },
  ];
  

const Amylase = () => {
  return (
    <div className='amylase'>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
           <TestTable table={seramAmylaseAndLipaseResults}/>
           <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default Amylase