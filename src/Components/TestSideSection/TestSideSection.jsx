import React from 'react'
import './testSideSection.css'

const TestSideSection = () => {
  return (
             <div className='table-side-section'>
                  <div className='side-button-section'>
                      <button>Note</button>
                      <button>Status</button>
                  </div>
                  <div className='side-radio-section'>
                      <div className='side-radio-field'>
                            <input type='radio'/>
                            <label>Samp./Bill No.</label>
                      </div>
                      <div className='side-radio-field'>
                            <input type='radio'/>
                            <label>Report No.</label>
                      </div>
                      <div className='side-radio-field'>
                            <input type='radio'/>
                            <label>Pat No.</label>
                      </div>
                  </div>
             </div>
  )
}

export default TestSideSection;