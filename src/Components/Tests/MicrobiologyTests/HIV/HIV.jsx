import React from 'react'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'
import TestTable from '../../../TestTable/TestTable'

const hiv=[{testName:'HIV I/II (SPOT)',findings:'Negetive'}]

const HIV = () => {
  return (
    <div className='hiv'>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Departmnet of Microbiology</h1>
        <div className='test-table-container'>
           <TestTable table={hiv}/>
          <TestSideSection/>
        </div>  
        <TestButtonSection/>
    </div>
  )
}

export default HIV;