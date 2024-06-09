import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const cholinesterasesResults = [
    {
      testName: 'SERUM CHOLINESTONESE LECELS',
      findings: 7609,
      normalValues: 'Male: 4620 - 11500, Female: 3930 - 10800',
    },
  ];
  

const Cholinestonese = () => {
  return (
    <div>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
          <TestTable table={cholinesterasesResults}/>
          <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default Cholinestonese