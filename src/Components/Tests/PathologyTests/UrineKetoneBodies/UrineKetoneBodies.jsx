import React from 'react'
import './urineKetoneBodies.css'
import TestTopSection from '../../../TestTopSection/TestTopSection';
import TestForm from '../../../TestForm/TestForm';
import TestSideSection from '../../../TestSideSection/TestSideSection';
import TestButtonSection from '../../../TestButtonSection/TestButtonSection';

const UrineKetoneBodies = () => {
  return (
    <div className='u-k-b'>
        <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Pathology</h1>
        <div className='test-table-container'>
           <table>
            <thead>
                <tr>
                    <th>Test Name</th>
                    <th>Findings</th>
                    <th>Units</th>
                    <th>Normal Values</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>URINE KETONE BODIES</td>
                    <td>+</td>
                </tr>
                <tr></tr>
            </tbody>
           </table>
           <TestSideSection/>
        </div>
        <TestButtonSection/>
    </div>
  )
}

export default UrineKetoneBodies;