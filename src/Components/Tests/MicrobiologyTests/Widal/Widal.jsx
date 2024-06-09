import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const widal=[
    {
      testName: 'Salmonella typhi O',
      findings: '1:160',
      units: '1:80 DIL',
      normalValues: '1:80 DIL',
    },
    {
      testName: 'Salmonella typhi H',
      findings: '1:120',
      units: '1:40 DIL',
      normalValues: '1:40 DIL',
    },
    {
      testName: 'Salmonella typhi ,AH,',
      findings: '1:40',
      units: '1:20 DIL',
      normalValues: '1:20 DIL',
    },
    {
      testName: 'Salmonella typhi ,BH,',
      findings: '1:40',
      units: '1:20 DIL',
      normalValues: '1:20 DIL',
    },
  ]

const Widal = () => {
  return (
    <div className='widal'>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Microbiology</h1>
        <div className='test-table-container'>
            <TestTable table={widal}/>
            <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default Widal