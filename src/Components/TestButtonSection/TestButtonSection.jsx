import React from 'react'
import './testButtonSection.css'

const TestButtonSection = () => {
  return (
    <div className='table-button-section'>
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
  )
}

export default TestButtonSection