import React from 'react'
import './visitRecord.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';

const VisitRecord = () => {
  return (
    <div className='visit-record'>
        <table>
            <thead>
                <tr>
                    <th>Date And Time</th>
                    <th>Type</th>
                    <th>Symptoms</th>
                    <th>Diagnosis</th>
                    <th>Treatment</th>
                    <th>Report</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>08/12/2023</td>
                    <td>Home</td>
                    <td></td>
                    <td></td>
                    <td>No Treatment</td>
                    <td>
                        <button>
                            <img src='./images/Download.png'/>
                            Download
                        </button>
                    </td>
                    <td>
                        <button>
                            <BorderColorIcon/>
                             Modify
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>08/12/2023</td>
                    <td>Home</td>
                    <td></td>
                    <td></td>
                    <td>No Treatment</td>
                    <td>
                        <button>
                            <img src='./images/Download.png'/>
                            Download
                        </button>
                    </td>
                    <td>
                        <button>
                          <BorderColorIcon/>
                            Modify
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default VisitRecord;