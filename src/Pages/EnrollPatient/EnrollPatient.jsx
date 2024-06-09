import React from 'react'
import { useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './enrollPatient.css'
import Navbar from '../../Components/Navbar/Navbar'

const EnrollPatient = () => {
    //Manage Form Sections
    const [sections,setSections]=useState({
        generalDetails:true,
        contactDetails:false,
        medicalHistory:false,
        knowYourPatient:false,
    })

    //Manage Profile Image
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const navigate=useNavigate();
    const profileImgRef=useRef();

    const handleUploadPhoto=()=>{
        profileImgRef.current.click();
            
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    
        // Display the preview of the selected image
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          setPreviewImage(null);
        }
      };

    const handleClose=()=>{
        navigate('/all-patients')
    }

    const handleSave=(name)=>{
     setSections({
        generalDetails:false,
        contactDetails:false,
        medicalHistory:false,
        knowYourPatient:false,
        [name]:true,
     })

        //Perform Save Logic Here

        }


        const [previousOperations,setPreviousOperations]=useState(false);
           
        const handlePreviousOperations=(e)=>{
               if(e.target.value=='yes'){
                setPreviousOperations(true)
               }
               else{
                setPreviousOperations(false)
               }
        }

        //   Know Your Patient Insurance Section 
        const [hasInsurance,setHasInsurance]=useState(false);
           
        const handleHasInsurance=(e)=>{
               if(e.target.value=='yes'){
                setHasInsurance(true)
               }
               else{
                setHasInsurance(false)
               }
        }

        //Health Cards Section
        const [hasHealthCards,setHasHealthCards]=useState(false);
       const handleHasHealthCards=(e)=>{
               if(e.target.value=='yes'){
                setHasHealthCards(true)
               }else{
                setHasHealthCards(false)
               }
        }

         //Smoker Section
        const [hasSmoker,setHasSmoker]=useState(false);
        const handleHasSmoker=(e)=>{
                if(e.target.value=='yes'){
                    setHasSmoker(true)
                }else{
                    setHasSmoker(false)
                }
         }

           //Alcohol Intake Section
         const [alcoholIntake,setAlcoholIntake]=useState(false);
        const handleAlcoholIntake=(e)=>{
                if(e.target.value=='yes'){
                    setAlcoholIntake(true)
                }else{
                    setAlcoholIntake(false)
                }
         }




  return (
         <>
    <Navbar/>
      <div className='enroll-patient'>
           <h1> New Enrollment</h1>
           {/* <div className='enroll-wrapper'>

           </div> */}
           <div className='toggle-section'>
            <div className={ (sections.generalDetails) ? 'active-toggle-field' : 'toggle-field'} >
                <div>General Details</div>
                <div className={(sections.generalDetails) ? 'toggle-field-circle' : ''}></div>
            </div> 
            <div className='toggle-line'></div>
            <div className={ (sections.contactDetails) ? 'active-toggle-field' : 'toggle-field'}>
                <div>Contact Details</div> 
                <div className={(sections.contactDetails) ? 'toggle-field-circle' : ''}></div>
            </div>
            <div className='toggle-line'></div>
            <div className={ (sections.medicalHistory) ? 'active-toggle-field' : 'toggle-field'}>
                <div>Medical Histroy</div>
                <div className={(sections.medicalHistory) ? 'toggle-field-circle' : ''}></div>
            </div>
            <div className='toggle-line'></div>
                <div className={ (sections.knowYourPatient) ? 'active-toggle-field' : 'toggle-field'}>
                    <div>Know your Patient</div> 
                <div className={(sections.knowYourPatient) ? 'toggle-field-circle' : ''}></div>
            </div>
           </div>
           <div className='enroll-form-container'> 

          {sections.generalDetails &&  (<div>
               <h3>General Details</h3>
                  <form onSubmit={(e)=>{e.preventDefault()}}>     
                    <div className='quick-form-section'>
                        <div className='form-profile-field'>
                              <div className='profile'>
                                <div>
                                    <img src={(previewImage)? previewImage:'./images/profile.png'} alt='profile Image'/>
                                </div>
                              </div>
                              <div className='profile-upload'>
                                <div className='upload-button'>
                                    <input type='file' ref={profileImgRef} onChange={handleFileChange} style={{display:'none'}}/>
                                    <button onClick={handleUploadPhoto}>
                                        <img src='' alt=''/>
                                        Upload Photo
                                    </button>
                                    <span>min size 10 Kb, max size 10Mb</span>
                                </div>
                                <div className='profile-or-section'>
                                    <div><hr/></div>
                                    <span>or</span>
                                    <div><hr/></div>
                                </div>
                                <div className='upload-button'>
                                    <button style={{backgroundColor:'#fb8500'}}>
                                        <img src='' alt='' />
                                        Take a Picture
                                    </button>
                                </div>
                              </div>
                        </div>
                    <div className='quick-form-field'>
                        <label>Name</label>
                        <input type='text' placeholder='Enter Name'/>
                    </div>
                    <div className='quick-form-field'>
                        <label>Surname</label>
                        <input type='text' placeholder='Enter Surname'/>
                    </div>
                    <div className='quick-form-field'>
                        <label>Date of Birth</label>
                        <input type='date'/>
                    </div>
                    </div>
                   
                   <div className='quick-form-section'>
                   <div className='quick-form-field'>
                        <label>Patient Id</label>
                        <input type='Number' placeholder='Enter Id'/>
                    </div>
                   <div className='quick-form-field'>
                        <label>Sex</label>
                        <div className='radio-section'>
                          <div className='radio-field'>
                             <input type='radio' name='gender' value='male'/>
                             <label>Male</label>
                           </div>
                           <div className='radio-field'>
                             <input type='radio' name='gender' value='Female'/>
                             <label>Female</label>
                           </div>
                           <div className='radio-field'>
                             <input type='radio' name='gender' value='other'/>
                             <label>Other</label>
                           </div>
                        </div>       
                    </div>
                    <div className='quick-form-field'>
                        <label>Age</label>
                        <input type='Number' placeholder='Enter Age'/>
                    </div>
                    <div className='quick-form-field'>
                        <label>Martial Status</label>
                        <input type='Number' placeholder='Enter Age'/>
                    </div>
                    <div className='quick-form-field'>
                        <label>Profession</label>
                        <input type='text' placeholder='Enter Profession'/>
                    </div>
                   </div>
                    <div className='quick-form-buttons'>
                        <button className='quick-close-button' onClick={handleClose} >Close</button>
                        <button className='save-button' onClick={()=>{handleSave('contactDetails')}}>Save</button>
                    </div>
                  </form>
               </div>)
                  }
               {/* General Details Form End */}

              { sections.contactDetails && (<div>
                <h3>Contact Details</h3>
                <form>
                    <div className='quick-form-section'>

                    <div className='quick-form-field'>
                      <label>Mobile Number</label>
                      <input type='Number' placeholder='Enter Mobile Number' required/>
                     </div>

                  <div className='quick-form-field'>
                    <label>Address</label>
                    <input type='text' placeholder='Enter Address' required/>
                  </div>

                  <div className='quick-form-field'>
                    <label>Area</label>
                    <input type='text' placeholder='Enter Area' required/>
                  </div>

                  <div className='quick-form-field'>
                    <label>City</label>
                    <input type='text' placeholder='Enter City' required/>
                  </div>

                  </div>
                  <div className='quick-form-section'>

                  <div className='quick-form-field'>
                    <label>Landline Number</label>
                    <input type='Number' placeholder='Enter Landline Number' required/>
                  </div>

                  <div className='quick-form-field'>
                    <label>Country</label>
                    <input type='text' placeholder='Enter Country ' required/>
                  </div>

                  <div className='quick-form-field'>
                    <label>Email Status</label>
                    <div className='radio-section'>
                       <div className='radio-field'>
                          <input type='radio' name='Email' value='hasEmail'/>
                          <label>Has Email</label>
                       </div>
                       <div className='radio-field'>
                           <input type='radio' name='Email' value='noEmail'/>
                           <label>No Email</label>
                       </div>
                    </div>    
                  </div>

                  <div className='quick-form-field'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Email' required/>
                  </div>

                  </div>

                  <div className='quick-form-buttons'>
                        <button className='quick-close-button' onClick={()=>{handleSave('generalDetails')}} >Previous</button>
                        <button className='save-button' onClick={()=>{handleSave('medicalHistory')}}>Save</button>
                    </div>

                </form>
               </div>)}
               {/* Contact Details Form End */}

               
               {sections.medicalHistory && (
                <div className='medical-history'>
                      <h3>Medical History</h3>
                      <form>
                      <div className='quick-form-section'>

                         <div className='quick-form-field'>
                             <label htmlFor='bloodGroup'>Blood Group</label>
                             <select id="bloodGroup" name="bloodGroup">
                                <option value="unknown" selected>Unknown</option>
                                <option value="O-">O-</option>
                                <option value="O+">O+</option>
                                <option value="A-">A-</option>
                                <option value="A+">A+</option>
                                <option value="B-">B-</option>
                                <option value="B+">B+</option>
                                <option value="AB-">AB-</option>
                                <option value="AB+">AB+</option>
                             </select>
                         </div>

                     <div className='quick-form-field'>
                         <label>Allergies</label>
                         <input type='text'  required/>
                     </div>

                     <div className='quick-form-field'>
                          <label>Previous Medical Conditions</label>
                          <input type='text' placeholder='Enter Previous Medical Conditions' required/>
                     </div>

                     <div className='quick-form-field'>
                          <label>Existing Medication</label>
                          <input type='text' placeholder='Enter Existing Medication' required/>
                     </div>

                     <div className='quick-form-field'>
                          <label>Nature of Medical Condition</label>
                          <select>
                            <option value='nonReportableDisease'>Non Reportable Disease </option>
                            <option value='ReportableDisease'>Reportable Disease </option>
                            </select>
                     </div>
              </div>
                 <div className='quick-form-section'>
                   <div className='quick-form-field'>
                       <label>Previous Operations</label>
                       <div className='radio-section'>
                          <div className='radio-field'>
                              <input type='radio' name='previousOperations' value='yes' onChange={handlePreviousOperations} />
                              <label>Yes</label>
                          </div>
                          <div className='radio-field'>
                             <input type='radio' name='previousOperations' value='no' onChange={handlePreviousOperations} />
                             <label>No</label>
                           </div>
                      </div>    
                  </div>

                {  previousOperations  && (  
                    <>
                  <div className='quick-form-field'>
                            <label>Nature of surgery </label>
                            <input type='text' placeholder='Nature of surgery ' required/>
                  </div>
                
                  <div className='quick-form-field'>
                            <label>Year and month of surgery </label>
                            <input type='text' placeholder='Enter Year and month of surgery ' required/>
                  </div>

                  <div className='quick-form-field'>
                            <label>Doctor of surgery</label>
                            <input type='text' placeholder='Enter Doctor of surgery' required/>
                  </div>

                  <div className='quick-form-field'>
                            <label>Reason of surgery</label>
                            <input type='text' placeholder='Enter Reason of surgery' required/>
                  </div>
                    </>
               )}  
                 </div>

                 <div className='quick-form-buttons'>
                        <button className='quick-close-button' onClick={()=>{handleSave('contactDetails')}} >Previous</button>
                        <button className='save-button' onClick={()=>{handleSave('knowYourPatient')}}>Save</button>
                     </div>
                      </form>
                </div>
               )  }

                  {/* Medical History Section Ends Here  */}

                  {sections.knowYourPatient && (
                    <div className='know-your-patient'>
                        <h3>Know Your Patient</h3>
                        <form>
                            <div className='quick-form-section'>
                                 
                                <div className='quick-form-field'>
                                  <label>Father’s Name</label>
                                  <input type='text' placeholder='Enter Father’s Name' required/>
                                </div>

                                <div className='quick-form-field'>
                                    <label>Father’s Status</label>
                                    <div className='radio-section'>
                                         <div className='radio-field'>
                                             <input type='radio' name='fatherStatus' value='alive' />
                                             <label>Alive</label>
                                         </div>
                                         <div className='radio-field'>
                                             <input type='radio' name='fatherStatus' value='dead' />
                                             <label>Dead</label>
                                         </div>
                                    </div>
                                </div> 

                                 <div className='quick-form-field'>
                                  <label>Mother’s Name</label>
                                  <input type='text' placeholder='Enter Mother’s Name' required/>
                                </div>

                                <div className='quick-form-field'>
                                    <label>Mother’s Status</label>
                                    <div className='radio-section'>
                                         <div className='radio-field'>
                                             <input type='radio' name='motherStatus' value='alive' />
                                             <label>Alive</label>
                                         </div>
                                         <div className='radio-field'>
                                             <input type='radio' name='motherStatus' value='dead' />
                                             <label>Dead</label>
                                         </div>
                                    </div>
                                </div>   

                                <div className='quick-form-field'>
                                    <label>Parents Together</label>
                                    <div className='radio-section'>
                                         <div className='radio-field'>
                                             <input type='radio' name='previousOperations' value='yes' />
                                             <label>Yes</label>
                                         </div>
                                         <div className='radio-field'>
                                             <input type='radio' name='previousOperations' value='no' />
                                             <label>No</label>
                                         </div>
                                    </div>
                                </div>  

                                  <div className='quick-form-field'>
                                  <label>Next to Kin</label>
                                  <input type='text' placeholder='Enter next to kin' required/>
                                </div> 

                                <div className='quick-form-field'>
                                  <label>Next of Kin Relationship</label>
                                  <select>
                                    <option value=''></option>
                                  </select>
                                </div> 

                                <div className='quick-form-field'>
                                  <label>Next of Kin Telephone</label>
                                  <input type='Number' placeholder='Enter next to kin Telephone' required/>
                                </div> 

                                <div className='quick-form-field'>
                                  <label>Hereditary Diseases in Family</label>
                                  <input type='text' placeholder='Enter Hereditary Diseases in Family' required/>
                                </div> 
                                </div>

                               <div className='quick-form-section'>
                                <div className='quick-form-field'>
                                    <label>Has Insurance</label>
                                    <div className='radio-section'>
                                         <div className='radio-field'>
                                             <input type='radio' name='hasInsurance' value='yes' onChange={handleHasInsurance} />
                                             <label>Yes</label>
                                         </div>
                                         <div className='radio-field'>
                                             <input type='radio' name='hasInsurance' value='no' onChange={handleHasInsurance} />
                                             <label>No</label>
                                         </div>
                                    </div>
                                </div>  

                                {hasInsurance && (
                                <>
                                    <div className='quick-form-field'>
                                      <label>Insurance Company</label>
                                      <input type='text' placeholder='Enter Insurance Company' required/>
                                    </div> 
                                    <div className='quick-form-field'>
                                      <label>Insurance Number</label>
                                      <input type='Number' placeholder='Enter Insurance Number' required/>
                                    </div> 
                                </>
                                )}

                         
                                <div className='quick-form-field'>
                                    <label>Has Health Cards</label>
                                    <div className='radio-section'>
                                         <div className='radio-field'>
                                             <input type='radio' name='hasInsurance' value='yes' onChange={handleHasHealthCards} />
                                             <label>Yes</label>
                                         </div>
                                         <div className='radio-field'>
                                             <input type='radio' name='hasInsurance' value='no' onChange={handleHasHealthCards} />
                                             <label>No</label>
                                         </div>
                                    </div>
                                </div>  

                                {hasHealthCards && (
                                <>
                                    <div className='quick-form-field'>
                                      <label>Health Card Type</label>
                                      <input type='text' placeholder='Enter Health Card Type' required/>
                                    </div> 
                                    <div className='quick-form-field'>
                                      <label>Health Card Number</label>
                                      <input type='Number' placeholder='Enter Health Card Number' required/>
                                    </div> 
                                </>
                                )}
                             
                                <div className='quick-form-field'>
                                    <label>Smoker</label>
                                    <div className='radio-section'>
                                         <div className='radio-field'>
                                             <input type='radio' name='hasSmoker' value='yes' onChange={handleHasSmoker} />
                                             <label>Yes</label>
                                         </div>
                                         <div className='radio-field'>
                                             <input type='radio' name='hasSmoker' value='no' onChange={handleHasSmoker} />
                                             <label>No</label>
                                         </div>
                                    </div>
                                </div>  

                                {hasSmoker && (
                                <>
                                    <div className='quick-form-field'>
                                      <label>How Many Years</label>
                                      <input type='Number' placeholder='Enter how many years' required/>
                                    </div> 
                                    <div className='quick-form-field'>
                                      <label>How Much Per Day</label>
                                      <input type='Number' placeholder='Enter how much per day' required/>
                                    </div> 
                                </>
                                )}

                                <div className='quick-form-field'>
                                    <label>Alcohol Intake</label>
                                    <div className='radio-section'>
                                         <div className='radio-field'>
                                             <input type='radio' name='alcoholIntake' value='yes' onChange={handleAlcoholIntake} />
                                             <label>Yes</label>
                                         </div>
                                         <div className='radio-field'>
                                             <input type='radio' name='alcoholIntake' value='no' onChange={handleAlcoholIntake} />
                                             <label>No</label>
                                         </div>
                                    </div>
                                </div>  

                                {alcoholIntake && (
                                <>
                                    <div className='quick-form-field'>
                                      <label>How Many Years</label>
                                      <input type='Number' placeholder='Enter how many years' required/>
                                    </div> 
                                    <div className='quick-form-field'>
                                      <label>How Much Per Day</label>
                                      <input type='Number' placeholder='Enter how much per day' required/>
                                    </div> 
                                </>
                                )}


              </div>
                              <div className='quick-form-buttons'>
                                <button className='quick-close-button' onClick={()=>{handleSave('medicalHistory')}} >Previous</button>
                                <button className='save-button' onClick={()=>{handleSave('medicalHistory')}}>Save</button>
                               </div>
                        </form>
                    </div>
                  ) }


           </div>
    </div>
    </>
  )
}

export default EnrollPatient;