import React from 'react'
import './completeUrineExamination.css'
import TestForm from '../../../TestForm/TestForm'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'
const CompleteUrineExamination = () => {
  return (
    <div className='c-u-e'>
      <TestTopSection/>
        <TestForm/>
        <h1 className='heading'>Department of Pathology</h1>
        <div className='test-table-container'>
          <table>
        <caption>Complete Blood Picture</caption>
                <thead>
                  <tr>
                    <th>Test Name</th>
                    <th>Findings</th>
                    <th>Units</th>
                    <th>Normal Values</th>
                  </tr>
                </thead>
         <tr>
      <td colSpan='1'><strong>Physical Examination</strong></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Quantity</td>
      <td>15 ML</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Appearance</td>
      <td>CLEAR</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Reaction</td>
      <td>ACIDIC</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Colour</td>
      <td>YELLOW</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Specific Gravity</td>
      <td>1.020</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>PH</td>
      <td>6.5</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colSpan='1'><strong>Chemical Examination</strong></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Albumin</td>
      <td>TRACE</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Sugar</td>
      <td>NIL</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Bile Salts</td>
      <td>NIL</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Bile Pigments</td>
      <td>NIL</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Ketone Bodies</td>
      <td>NEGATIVE</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colSpan='1'><strong>Microscopic Examination</strong></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>PUS Cells</td>
      <td>3-4 /HPF</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>EPITHELIAL CELLS</td>
      <td>2-3 /HPF</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Red Blood Cells</td>
      <td>NIL /HPF</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Bacteria</td>
      <td>NIL /HPF</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>OTHERS</td>
      <td>NIL /HPF</td>
      <td></td>
      <td></td>
    </tr>
  </table>
         <TestSideSection/>
        </div>
     <TestButtonSection/>
    </div>
  )
}

export default CompleteUrineExamination