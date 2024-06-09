import React, {useState} from 'react'
import './consultation.css'

import Multiselect from 'multiselect-react-dropdown';

const Consultation = () => {

    const [addMedication,setAddMedication]=useState(false);

    const handleAddMedication =()=>{
        setAddMedication(true);
    }

   const handleRemoveMedication=()=>{
        setAddMedication(false);
    }


    const options=[{name: 'Option 1', id: 1},{name: 'Option 2️⃣', id: 2},{name: 'Option 2️⃣', id: 2},{name: 'Option 2️⃣', id: 2},{name: 'Option 2️⃣', id: 2}];
    const pathologyTests = [
        { id: 1, name: 'Complete Blood Count (CBC)' },
        { id: 2, name: 'Blood Glucose Test' },
        { id: 3, name: 'Lipid Profile' },
        { id: 4, name: 'Liver Function Tests (LFT)' },
        { id: 5, name: 'Kidney Function Tests (KFT)' },
        { id: 6, name: 'Thyroid Function Tests (TFT)' },
        { id: 7, name: 'Hemoglobin A1c Test' },
        { id: 8, name: 'C-Reactive Protein (CRP) Test' },
        { id: 9, name: 'Urinalysis' },
        { id: 10, name: 'Electrolyte Panel' },
        { id: 11, name: 'Coagulation Profile' },
        { id: 12, name: 'Prostate-Specific Antigen (PSA) Test' },
        { id: 13, name: 'Vitamin D Test' },
        { id: 14, name: 'Ferritin Test' },
        { id: 15, name: 'Thyroid Antibody Tests' },
        { id: 16, name: 'Cardiac Enzyme Tests' },
        { id: 17, name: 'Hormone Panel' },
        { id: 18, name: 'Allergy Tests' },
        { id: 19, name: 'Serum Iron Test' },
        { id: 20, name: 'Glycosylated Hemoglobin (HbA1c) Test' },
      ];
      
      console.log(pathologyTests);

      const biochemistryTests = [
        { id: 1, name: 'Blood Glucose Test' },
        { id: 2, name: 'Lipid Profile' },
        { id: 3, name: 'Liver Function Tests (LFT)' },
        { id: 4, name: 'Kidney Function Tests (KFT)' },
        { id: 5, name: 'Electrolyte Panel' },
        { id: 6, name: 'C-Reactive Protein (CRP) Test' },
        { id: 7, name: 'Albumin Test' },
        { id: 8, name: 'Bilirubin Test' },
        { id: 9, name: 'Amylase Test' },
        { id: 10, name: 'Calcium Test' },
        { id: 11, name: 'Phosphorus Test' },
        { id: 12, name: 'Alkaline Phosphatase Test' },
        { id: 13, name: 'Uric Acid Test' },
        { id: 14, name: 'Protein Electrophoresis' },
        { id: 15, name: 'Aspartate Aminotransferase (AST) Test' },
        { id: 16, name: 'Alanine Aminotransferase (ALT) Test' },
        { id: 17, name: 'Creatine Kinase (CK) Test' },
        { id: 18, name: 'Creatinine Test' },
        { id: 19, name: 'Gamma-Glutamyltransferase (GGT) Test' },
        { id: 20, name: 'Lactate Dehydrogenase (LDH) Test' },
      ];
      
      console.log(biochemistryTests);
       
      const microbiologyTests = [
        { id: 1, name: 'Gram Stain Test' },
        { id: 2, name: 'Culture and Sensitivity Test' },
        { id: 3, name: 'Blood Culture Test' },
        { id: 4, name: 'Urine Culture Test' },
        { id: 5, name: 'Throat Swab Test' },
        { id: 6, name: 'Stool Culture Test' },
        { id: 7, name: 'Rapid Antigen Test (e.g., Influenza, Strep)' },
        { id: 8, name: 'Microscopic Examination of Fecal Specimen' },
        { id: 9, name: 'Widal Test' },
        { id: 10, name: 'VDRL Test (Venereal Disease Research Laboratory)' },
        { id: 11, name: 'Serological Tests for Infectious Diseases' },
        { id: 12, name: 'Molecular Tests (PCR, DNA/RNA Tests)' },
        { id: 13, name: 'Ziehl-Neelsen Staining for Acid-Fast Bacilli (TB)' },
        { id: 14, name: 'Parasitology Tests (e.g., Malaria, Giardia)' },
        { id: 15, name: 'Fungal Culture Test' },
        { id: 16, name: 'Antibiotic Susceptibility Testing' },
        { id: 17, name: 'Rapid Plasma Reagin (RPR) Test' },
        { id: 18, name: 'Cryptococcal Antigen Test' },
        { id: 19, name: 'Coagglutination Test' },
        { id: 20, name: 'Antimicrobial Susceptibility Testing (AST)' },
      ];
      
      console.log(microbiologyTests);
     

  return (
    <div className='consultation'>
         <div className='book-form'>
                <form onSubmit={(e)=>{e.preventDefault()}}>
                    <div className='form-section-1'>

                      <div>

                       <div className='book-form-field'>
                        <label>Nature of Visit</label>
                        <div className='radio-section'>
                          <div className='radio-field'>
                          <input type='radio' name='nature-of-visit' value='home'/>
                          <label>Home</label>
                          </div>
                          <div className='radio-field'>
                          <input type='radio' name='nature-of-visit' value='clinic'/>
                          <label>Clinic</label>
                          </div>
                          <div className='radio-field'>
                          <input type='radio' name='nature-of-visit' value='tele'/>
                          <label>Tele</label>
                          </div>
                          </div>
                        </div>
                       <div className='book-form-field'>
                        <label>Main Symptoms</label>
                        <Multiselect options={options} />
                       </div>
                     </div>
                     <div>
                        <div className='book-form-field'>
                        <label>Pathology Test</label>
                            <Multiselect options={pathologyTests}/>
                        </div>
                        <div className='book-form-field'>
                        <label>Microbiology Test</label>
                            <Multiselect options={microbiologyTests}/>
                        </div>
                        <div className='book-form-field'>
                        <label>Biochemistry Test</label>
                            <Multiselect options={biochemistryTests}/>
                        </div>
                     </div>

                  </div>
                    <div className='form-button-section'>
                        <button style={{backgroundColor:'#f95738',}}>Symptoms
                            <img src='./images/symptoms.png' alt='symptoms logo' />
                        </button>
                        <button style={{backgroundColor:'#a4133c',}}>Diagnosis
                            <img src='./images/Diagnosis.png' alt='diagnosis logo' />
                        </button>
                        <button style={{backgroundColor:'#2d6a4f'}}>Management
                            <img src='./images/management.png' alt='management logo' />
                        </button>
                    </div>

                    <div className='form-section-1'>
                    <div>
                        <div className='book-form-field'>
                        <label>Primary Diagnosis</label>
                            <Multiselect options={pathologyTests}/>
                        </div>
                        <div className='book-form-field'>
                        <label>Principal Diagnosis</label>
                            <Multiselect options={microbiologyTests}/>
                        </div>
                        <div className='book-form-field'>
                        <label>Other Diagnosis</label>
                            <Multiselect options={biochemistryTests}/>
                        </div>
                     </div>
                     <div>
                        <div className='book-form-field'>
                        <label>Secondary Diagnosis</label>
                            <Multiselect options={pathologyTests}/>
                        </div>
                        <div className='book-form-field'>
                        <label htmlFor='advices'>Advices</label>
                            <input type='text' id='advices'/>
                        </div>
                        <div className='book-form-field'>
                        <label>Next Visit Date</label>
                            <input type='date'/>
                        </div>
                     </div>

                    </div>

                    <div className='form-section-1'>
                       {!addMedication && <button className='medication-button' onClick={handleAddMedication}>Add Medication</button>}

                        {addMedication && (
                            <div className='form-section-2'>
                                <div className='form-section-1'>
                               <div> 
                                <div className='book-form-field'>
                                    <label>Medication</label>
                                    <input type='text'/>
                                    <p>Enter "symptom, nature, manufacture" for medication search</p>
                                </div>
                                <div className='book-form-field'>
                                    <label>Medication Time</label>
                                    <input type='text'/>
                                    <p>Enter when medication should be used. If more than once, 
                                        use coma to separate times (like 12:00,18:30)</p>
                                </div>
                                </div>
                                <div>
                                <div className='book-form-field'>
                                    <label>Medication Duration (last day of usage)</label>
                                    <input type='date'/>
                                    <p>Enter "symptom, nature, manufacture" for medication search</p>
                                </div>
                                <div className='book-form-field'>
                                    <label>Medication Notes</label>
                                    <input type='text'/>
                                    <p>Enter "symptom, nature, manufacture" for medication search</p>
                                </div>
                                </div>
                                </div>
                                <div className='form-section-1'>
                                    <button  className='medication-button'>Add Medication</button>
                                    <button className='medication-button' onClick={handleRemoveMedication}>Remove</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='form-section-1'>
                        <button className='close-button' disabled>Close</button>
                        <button className='save-button'>Save</button>
                    </div>
                    
                </form>
            </div>
           
    </div>
  )
}

export default Consultation