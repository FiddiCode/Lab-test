import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const cholesterolResults = [
    {
      testName: 'TOTAL CHOLESTEROL',
      findings: 82,
      units: 'mg/dl',
      normalValues: '150 - 200 mg%',
    },
    {
      testName: 'HDL CHOLESTEROL',
      findings: 34,
      units: 'mg/dl',
      normalValues: 'Male: 30 - 55 mg/dl, Female: 45 - 65 mg/dl',
    },
    {
      testName: 'LDL CHOLESTEROL',
      findings: 23,
      units: 'mg/dl',
      normalValues: '115 - 205 mg/dl',
    },
    {
      testName: 'VLDL',
      findings: 25,
      units: 'mg/dl',
      normalValues: 'upto 40 mg/dl',
    },
    {
      testName: 'SERUM TRIGLYCERIDES',
      findings: 127,
      units: 'mg/dl',
      normalValues: '10 - 160 mg/dl',
    },
    {
      testName: 'TOTAL CHOLESTEROL/HDL CHOLESTEROL RATIO',
      findings: 2.4,
      units: 'ratio',
      normalValues: '1.3 - 5.0 ratio',
    },
  ];
    

const Lipid = () => {
  return (
    <div>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
            <TestTable table={cholesterolResults}/>
            <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default Lipid