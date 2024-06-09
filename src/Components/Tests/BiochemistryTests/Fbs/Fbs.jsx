import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection';
import TestButtonSection from '../../../TestButtonSection/TestButtonSection';

const bloodSugarResults = [
    {
      testName: 'FASTING BLOOD SUGAR',
      findings: 208,
      units: 'mg/dl',
      normalValues: '70 - 110 mg/dl',
    },
    {
      testName: 'POST LUNCH BLOOD SUGAR',
      findings: 317,
      units: 'mg/dl',
      normalValues: '80-160 mg/dl',
    },
  ];
  

const Fbs = () => {
  return (
    <div className='fbs'>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
           <TestTable table={bloodSugarResults}/>
           <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default Fbs