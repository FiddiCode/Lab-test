import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const lftTestResults = [
    {
      testName: 'Total Bilirubin',
      findings: 0.5,
      units: 'mg/dl',
      normalValues: 'Upto 1.2',
    },
    {
      testName: 'Direct Bilirubin',
      findings: 0.1,
      units: 'mg/dl',
      normalValues: 'Upto 0.3',
    },
    {
      testName: 'Indirect Bilirubin',
      findings: 0.4,
      units: 'mg/dl',
    },
    {
      testName: 'Aspartate aminotransferase (SGPT)',
      findings: 39,
      units: 'U/L',
      normalValues: 'Upto 40',
    },
    {
      testName: 'Aspartate aminotransferase (SGOT)',
      findings: 43,
      units: 'U/L',
      normalValues: 'Upto 42',
    },
    {
      testName: 'Alkaline Phosphates',
      findings: 81,
      units: 'U/L',
      normalValues: '>12 Yrs: 108-306 iu/l, <12 Yrs: 210-810 u/l',
    },
    {
      testName: 'Total Proteins',
      findings: 6.7,
      units: 'gms/dl',
      normalValues: '6.3-8.7 g/l',
    },
    {
      testName: 'Albumin',
      findings: 3.9,
      units: 'gm/l',
      normalValues: '3.7-5.3 g/l',
    },
    {
      testName: 'Globulin',
      findings: 2.8,
      units: 'gms/dl',
      normalValues: '1.8-3.6 g/l',
    },
    {
      testName: 'A/G Ratio',
      findings: 1.1,
    },
  ];  

const LFT = () => {
  return (
    <div className='lft'> 
      <TestTopSection/>
      <TestForm/>
      <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
          <TestTable table={lftTestResults}/>
          <TestSideSection/>
        </div>
       <TestButtonSection/>
    </div>
  )
}

export default LFT;