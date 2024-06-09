import React, { useState } from 'react'
import './centralLab.css'
import { formFields } from '../../constants/labReportForm'
import {tableFields} from '../../constants/labReportTable'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'

const CentralLab = () => {

    const fieldNames=formFields.map((item)=>{
        return item.name;
    })
    const [data, setData]=useState(fieldNames);

    const handleData=(e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    console.log(data)



  return (
    <>
    <Navbar/>
    <div className='central-lab'>
        <div className='report-form'>
            <h1 className='heading'>Lab Report Patient Information</h1>
            <form>
            {/* {
                formFields.map((item)=>{
                    return (
                        <div className="fields" key={item.id}>
                           <label htmlFor=''>{item.label}</label>
                           <input type={item.type} placeholder={item.placeholder}  name={item.name}  onChange={handleData}/>
                         </div>
                    )
                })
            
            }  */}
        <div className='central-lab-form-section'>
            <div className='central-lab-form-field'>
                <label>Sample No.</label>
                <input type='text'  name='sampleNo' placeholder='cl92340' />
            </div>
            <div className='central-lab-form-field'>
                <label>Sample Date</label>
                <input type='date' name='sampleDate' />
            </div>
            <div className='central-lab-form-field'>
                <label>Rep. No.</label>
                <input type='text'name='repNo' placeholder='cl92340'/>
            </div>
            <div className='central-lab-form-field'>
                <label>Rep. Date</label>
                <input type='date'name='repDate'/>
            </div>
        </div>  
        <div className='central-lab-form-section'>
            <div className='central-lab-form-field'>
                <label>Rep. Time</label>
                <input type='time' name='repTime' placeholder='12:30'/>
            </div>
            <div className='central-lab-form-field'>
                <label>Ward Name</label>
                <input type='text' name='wardName' placeholder=''/>
            </div>
            <div className='central-lab-form-field'>
                <label>Pt. Name</label>
                <input type='text' name='ptName' placeholder='Girija Kumari'/>
            </div>
            <div className='central-lab-form-field'>
                <label>Gender</label>
                <select>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
            </div>
         </div> 
        <div className='central-lab-form-section'>
            <div className='central-lab-form-field'>
                <label>Age</label>
                <input type='Number' name='age' placeholder='40'/>
            </div>
            <div className='central-lab-form-field'>
                <label>Sample Time</label>
                <input type='time' name='sampleTime' placeholder='01:24'/>
            </div>
            <div className='central-lab-form-field'>
                <label>Kit/Material</label>
                <input type='text' name='kitMaterial' placeholder='0.0'/>
            </div>
            <div className='central-lab-form-field'>
                <label>Lab Doctor</label>
                <input type='text' name='labDoctor' placeholder='Dinesh'/>
            </div>
        </div>
        <div className='central-lab-form-section'>
            <div className='central-lab-form-field'>
                <label>Lab.Tech.</label>
                <input type='text' name='labTech' placeholder='Srikanth'/>
            </div>
            <div className='central-lab-form-field'>
                <label>Pat. No.</label>
                <input type='text' name='patNo' placeholder='cl92340'/>
            </div>
            <div className='central-lab-form-field'>
                <label>Rep. TAT</label>
                <input type='Number'name='repTat' placeholder='92340'/>
            </div>
            <div className='central-lab-form-field'>
                <label>Specimen</label>
                <input type='text' name='specimen' placeholder=''/>
            </div>
        </div>
        <div className='central-lab-form-section'>
            <div className='central-lab-form-field'>
                <label>Tests</label>
                <input type='text' name='tests' placeholder='Liver Function Test-T0206'/>
            </div>
            <div className='central-lab-form-field'>
                <label>Remarks</label>
                <input type='text' placeholder='cl92340'/>
            </div>
            <div className='central-lab-form-field'>
                <label>Std. TAT</label>
                <input type='text'  name='stdTat' placeholder=''/>
            </div>
            <div className='central-lab-form-field'>
                <label>UMR No.</label>
                <input type='Number' placeholder='92340'/>
            </div>
        </div>    
            </form>
        </div>
           
           {/* Second Section */}
           <h1 className='heading'>Lab Report Test Result Details </h1>
          <div className='central-lab-container'>

        <div className='central-lab-report-table'>
       
         <table>
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Investigation Name</th>
                    <th scope="col">Findings</th>
                    <th scope="col">Reference Values</th>
                    <th scope="col">Range-In/Out (R/O).</th>
                    <th scope="col">Units</th>
                </tr>
            </thead>
            <tbody>
                { 
                tableFields.map((item,index)=>{
                    return (
                        <tr key={index}>
                            <td>{item.sNo}</td>
                            <td>{item.InvestigationName}</td>
                            <td>{item.findings}</td>
                            <td>{item.referenceValues}</td>
                            <td>{item.range}</td>
                            <td>{item.units}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>

         {/* <div className='central-lab-table-button-section'>
            <div className='table-button-fields'>
            <button>New</button>
            <button>Edit</button>
            <button>Save</button>
            <button>Delete</button>
            <button>Search</button>
            <button>Close</button>
            </div>
            <div className='table-button-fields'>
            <button>Print</button>
            <button>View</button>
            </div>
            <div className='table-button-fields'>
            <button>Show Samples</button>
            </div>
         </div> */}
        </div>
                    
                    <div className='central-lab-table-side-section'>
                        <div className='side-button-section'>
                          <button>Note</button>
                          <button>Status</button>
                        </div>
                        <div className='side-radio-section'>
                           <div className='central-lab-radio-field'>
                            <input type='radio'/>
                            <label>Samp./Bill No.</label>
                           </div>
                           <div className='central-lab-radio-field'>
                            <input type='radio'/>
                            <label>Report No.</label>
                           </div>
                           <div className='central-lab-radio-field'>
                            <input type='radio'/>
                            <label>Pat No.</label>
                           </div>
                        </div>

                    </div>
    </div>
    <div className='central-lab-table-button-section'>
            <div className='table-button-fields'>
            <button>New</button>
            <button>Edit</button>
            <button>Save</button>
            <button>Delete</button>
            <button>Search</button>
            <button>Close</button>
            </div>
            <div className='table-button-fields'>
            <button>Print</button>
            <button>View</button>
            </div>
            <div className='table-button-fields'>
            <button>Show Samples</button>
            </div>
         </div>
</div>

    </>
  )
}

export default CentralLab