import React from 'react'
import './haemogram.css'
import TestTopSection from '../../../TestTopSection/TestTopSection'
import TestForm from '../../../TestForm/TestForm'
import TestSideSection from '../../../TestSideSection/TestSideSection'
import TestButtonSection from '../../../TestButtonSection/TestButtonSection'

const Haemogram = () => {
  return (
    <div className='haemogram'>
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
      <td>Haemoglobin</td>
      <td>12.5</td>
      <td>gm/dl</td>
      <td>Male: 13.5 - 18.0, Female: 11.5 - 16.0, Child: 12.0 - 14.0</td>
    </tr>
    <tr>
      <td>R.B.C</td>
      <td>5.0</td>
      <td>MILL/CUMM.</td>
      <td>(M) 4.5 - 6.0 MILL/CUMM.</td>
    </tr>
    <tr>
      <td>P.C.V</td>
      <td>36</td>
      <td>vol%</td>
      <td>40 - 50 Vol%</td>
    </tr>
    <tr>
      <td>M C V</td>
      <td>72</td>
      <td>fl</td>
      <td>83 - 101 fl</td>
    </tr>
    <tr>
      <td>M C H</td>
      <td>24</td>
      <td>pg</td>
      <td>27 - 32 pg</td>
    </tr>
    <tr>
      <td>M C H C</td>
      <td>33.8</td>
      <td>gm/dl</td>
      <td>31.5 - 34.5 gm/dl</td>
    </tr>
    <tr>
      <td>Total WBC Count</td>
      <td>9,700</td>
      <td>/cmm</td>
      <td>4,000 - 10,000 /cmm</td>
    </tr>
    <tr>
      <td><strong>DIFFERENTIAL COUNT</strong></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Neutrophils</td>
      <td>66</td>
      <td>%</td>
      <td>40 - 70 %</td>
    </tr>
    <tr>
      <td>Lymphocytes</td>
      <td>27</td>
      <td>%</td>
      <td>20 - 40 %</td>
    </tr>
    <tr>
      <td>Eosinophils</td>
      <td>03</td>
      <td>%</td>
      <td>01 - 06 %</td>
    </tr>
    <tr>
      <td>Monocytes</td>
      <td>04</td>
      <td>%</td>
      <td>03 - 08 %</td>
    </tr>
    <tr>
      <td>Basophils</td>
      <td>00</td>
      <td>%</td>
      <td>00 - 01 %</td>
    </tr>
    <tr>
      <td>Platelet Count</td>
      <td>2,41,000</td>
      <td>Lakhs/Cumm</td>
      <td>1.5 - 4.0 Lakhs/Cumm</td>
    </tr>
    <tr>
      <td><strong>Peripheral Smear</strong></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>RBC</td>
      <td>NORMOCYTIC / NORMOCHROMIC</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>WBC</td>
      <td>WITHIN NORMAL LIMITS</td>
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

export default Haemogram