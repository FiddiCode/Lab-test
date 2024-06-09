import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestTable from '../../../TestTable/TestTable'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const raFactor=[{testName:'RA Factor',findings:'Negetive',units:'',normalValues:''}]

const RAFactor = () => {
  return (
    <div className='ra-factor'>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Microbiology</h1>
        <div className='test-table-container'>
           <TestTable table={raFactor}/>
           <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default RAFactor