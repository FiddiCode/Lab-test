import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const proBNPTestResult = [
    {
      testName: 'Pro BNP',
      findings: 1240,
      units: 'pg/ml',
      normalValues: '< 300 pg/ml',
    },
  ];
  

const ProBNP = () => {
  return (
    <div>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
          <TestTable table={proBNPTestResult}/>
          <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default ProBNP