import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection';
import TestForm from '../../../TestForm/TestForm';
import TestSideSection from '../../../TestSideSection/TestSideSection';
import TestButtonSection from '../../../TestButtonSection/TestButtonSection';
import TestTable from '../../../TestTable/TestTable';

const creatinineResults = [
    {
      testName: 'SERAM CREATININE',
      findings: 1.4,
      units: 'mg/dl',
      normalValues: '0.6-1.4',
    },
  ];
  

const SerumCreatinine = () => {
  return (
    <div>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
          <TestTable table={creatinineResults}/>
          <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default SerumCreatinine;