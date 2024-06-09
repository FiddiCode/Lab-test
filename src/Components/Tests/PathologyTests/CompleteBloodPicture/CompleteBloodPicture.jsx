import React from 'react'
import './CompleteBloodPicture.css'
import TestForm from '../../../TestForm/TestForm'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestTopSection from '../../../TestTopSection/TestTopSection'

const CompleteBloodPicture = () => {

  return (
    <div className='complete-blood-picture'>
       <TestTopSection/>
             <TestForm/>
             <h2 className='heading'>Department of Pathology</h2>

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
                <tbody>
                <tr>
      <td>HEMOGLOBIN</td>
      <td>12.1</td>
      <td>gms%</td>
      <td>(M) 13.0 - 18.0 gms%, (F) 12.0 - 16.0 gms%</td>
    </tr>
    <tr>
      <td>Total RBC Count</td>
      <td>4.5</td>
      <td>Mill/cumm</td>
      <td>Male: 4.5-6.5 Mill/cumm, Female: 3.8-5.8 Mill/cumm</td>
    </tr>
    <tr>
      <td>P.C.V</td>
      <td>37</td>
      <td>vol%</td>
      <td>Male: 40-54%, Female: 37-47%</td>
    </tr>
    <tr>
      <td>Total WBC Count</td>
      <td>11,300</td>
      <td>/Cumm</td>
      <td>4000-11000/cumm</td>
    </tr>
    <tr>
      <td>Platelet Count</td>
      <td>2,95,000</td>
      <td>Lakhs/cumm</td>
      <td>150000 - 450000 lakhs/cumm</td>
    </tr>
    <tr>
      <td colspan="1"><strong>DIFFERENTIAL COUNT</strong></td>
    </tr>
    <tr>
      <td>Neutrophils</td>
      <td>60</td>
      <td>%</td>
      <td>40 - 70%</td>
    </tr>
    <tr>
      <td>Lymphocytes</td>
      <td>34</td>
      <td>%</td>
      <td>20-45%</td>
    </tr>
    <tr>
      <td>ESONOPHILS</td>
      <td>02</td>
      <td>%</td>
      <td>01-06%</td>
    </tr>
    <tr>
      <td>Monocytes</td>
      <td>04</td>
      <td>%</td>
      <td>02 - 08 %</td>
    </tr>
    <tr>
      <td>Basophils</td>
      <td>00</td>
      <td>%</td>
      <td>01 - 01 %</td>
    </tr>
    <tr>
      <td colspan="1"><strong>Peripheral Smear</strong></td>
    </tr>
    <tr>
      <td>RBC</td>
      <td>NORMOCYTIC / NORMOCHROMIC</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>WBC</td>
      <td>LEUCOCYTOSIS</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Platelet</td>
      <td>ADEQUATE</td>
      <td></td>
      <td></td>
    </tr>
                </tbody>
              </table>

            <TestSideSection/>
             </div>
         <TestButtonSection/>
        </div>
  )
}

export default CompleteBloodPicture;