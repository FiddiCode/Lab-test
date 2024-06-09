import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection';
import TestForm from '../../../TestForm/TestForm';
import TestSideSection from '../../../TestSideSection/TestSideSection';
import TestButtonSection from '../../../TestButtonSection/TestButtonSection';
import TestTable from '../../../TestTable/TestTable';

const malariaTestResult = [
    {
      testName: 'MALARIA PARASITE (F & V)',
      findings: 'NEGATIVE',
    },
  ];
  
  

const Maleria = () => {
  return (
    <div>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
          <TestTable table={malariaTestResult}/>
          <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default Maleria;