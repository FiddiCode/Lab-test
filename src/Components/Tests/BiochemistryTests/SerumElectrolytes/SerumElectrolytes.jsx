import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const electrolyteResults = [
    {
      testName: 'Sodium',
      findings: 141,
      units: 'mmol/l',
      normalValues: '135 - 155',
    },
    {
      testName: 'Potassium',
      findings: 4.2,
      units: 'mmoI/L',
      normalValues: '3.5 - 5.5',
    },
    {
      testName: 'Chloride',
      findings: 106,
      units: 'MMO/L',
      normalValues: '98-108',
    },
  ];
  

const SerumElectrolytes = () => {
  return (
    <div className='serum-electrolytes'>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Biochemistry</h1>
        <div className='test-table-container'>
            <TestTable table={electrolyteResults}/>
            <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default SerumElectrolytes