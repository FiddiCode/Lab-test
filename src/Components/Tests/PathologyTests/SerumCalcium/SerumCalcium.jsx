import React from 'react'
import './serumCalcium.css'
import TestTopSection from '../../../TestTopSection/TestTopSection';
import TestForm from '../../../TestForm/TestForm';
import TestSideSection from '../../../TestSideSection/TestSideSection';
import TestButtonSection from '../../../TestButtonSection/TestButtonSection';

const SerumCalcium = () => {
  return (
    <div className='s-c'>
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
                        <td>Serum Calcium</td>
                        <td>8.6</td>
                        <td>mg/dl</td>
                        <td>8.7 - 11.0</td>
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

export default SerumCalcium; 