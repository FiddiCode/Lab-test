import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const vdrl=[{testName:'VDRL',findings:'Negetive'}]

const VDRL = () => {
  return (
    <div className='vdrl'>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Microbiology</h1>
        <div className='test-table-container'>
            <TestTable table={vdrl}/>
            <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default VDRL;