import React from 'react'
import './testTable.css'

const TestTable = ({table}) => {
  return (
    // <div className='test-table'>
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
                {
                    table.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.testName}</td>
                            <td>{item.findings}</td>
                            <td>{item.units}</td>
                            <td>{item.normalValues}</td>
                        </tr>
                })}
                {(table.length==1) && (<tr></tr>)}
            </tbody>
        </table>
    // </div>
  )
}

export default TestTable