import React from 'react'
import './testForm.css'
import { useLocation } from 'react-router-dom'

const TestForm = () => {
     const {state}=useLocation()
     console.log(state)
  return (
    <>
     <div className='test-form'>
            <h2  className='heading'>Patient Information</h2>
              <form>
                 <div className="form-field">
                     <label htmlFor=''>Patient Name</label>
                     <input type='text' placeholder='R.LAXMAMMA' name='pt-name' value={state?.patient?.name}/>
                </div>

                <div className="form-field">
                     <label htmlFor=''>Age:</label>
                     <input type='Number' placeholder='50' name='pt-age ' value={state?.patient?.age}/>
                </div>

                <div className="form-field">
                     <label htmlFor=''>Sex:</label>
                     <select value={state?.patient?.sex}>
                       <option selected disabled></option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                     </select>
                </div>

                <div className="form-field">
                     <label htmlFor=''>Consultant:</label>
                     <input type='text' placeholder='Dr.DINESH.M' name='pt-consultant'  value={state?.patient?.consultant}/>
                </div>

                <div className="form-field">
                     <label htmlFor=''>Referral Dr:</label>
                     <input type='text' placeholder='' name='pt-consultant'  value={state?.patient?.referral}/>
                </div>

                <div className="form-field">
                     <label htmlFor=''>Specimen:</label>
                     <input type='text' placeholder='' name='pt-specimen' />
                </div>


                <div className="form-field">
                     <label htmlFor=''>Patient No:</label>
                     <input type='text' placeholder='2052/23' name='pt-no'  value={state?.patient?.no}/>
                </div>

                <div className="form-field">
                     <label htmlFor=''>Sample Date:</label>
                     <input type='date' placeholder='' name='pt-sample-date'  value={state?.patient?.sample_date}/>
                </div>

                <div className="form-field">
                     <label htmlFor=''>Sample No:</label>
                     <input type='text' placeholder='CL23003108' name='pt-sample-no' value={state?.patient?.sample_no} />
                </div>

                <div className="form-field">
                     <label htmlFor=''>Reported Date:</label>
                     <input type='date' placeholder='' name='pt-reported-date' value={state?.patient?.reported_date}/>
                </div>

                <div className="form-field">
                     <label htmlFor=''>Reported Time:</label>
                     <input type='time' placeholder='09:38' name='pt-reported-time' value={state?.patient?.reported_time}/>
                </div>

                <div className="form-field">
                     <label htmlFor=''>Report No:</label>
                     <input type='text' placeholder='B23005567' name='pt-report-no' value={state?.patient?.reported_no}/>
                </div>

              </form>
        </div>

        {/* <div className='info-table'>
        <h2 className='heading'>Test Info</h2>
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
                         state?.test_data?.map((test, index) => {
                          return  <tr key={index}>
                                    <td>{test?.test_name}</td>
                                    <td>{test?.finding}</td>
                                    <td>{test?.units}</td>
                                    <td>{test?.normal_values}</td>
                                  </tr>
                         })
}
               </tbody>
              </table>
        </div> */}
    </>
  )
}

export default TestForm;