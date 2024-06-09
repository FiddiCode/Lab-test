import React,{useState} from 'react'
import './allPatients.css'
import SearchIcon from '@mui/icons-material/Search';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RefreshIcon from '@mui/icons-material/Refresh';
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';

const patientsArray = [
  { name: 'John Doe', age: 30, sex: 'Male', address: '123 Main St', telephone: '555-1234', 'date-of-last-visit': '2023-01-01', 'patient-id': 'P001', 'registration-number': 'R001', branch: 'Hospital A' },
  { name: 'Jane Smith', age: 25, sex: 'Female', address: '456 Oak St', telephone: '555-5678', 'date-of-last-visit': '2023-02-15', 'patient-id': 'P002', 'registration-number': 'R002', branch: 'Hospital B' },
  { name: 'Bob Johnson', age: 45, sex: 'Male', address: '789 Pine St', telephone: '555-9876', 'date-of-last-visit': '2023-03-20', 'patient-id': 'P003', 'registration-number': 'R003', branch: 'Hospital A' },
  { name: 'Alice Davis', age: 35, sex: 'Female', address: '101 Elm St', telephone: '555-4321', 'date-of-last-visit': '2023-04-05', 'patient-id': 'P004', 'registration-number': 'R004', branch: 'Hospital B' },
  { name: 'Chris White', age: 28, sex: 'Male', address: '202 Cedar St', telephone: '555-8765', 'date-of-last-visit': '2023-05-10', 'patient-id': 'P005', 'registration-number': 'R005', branch: 'Hospital C' },
  { name: 'Laura Johnson', age: 32, sex: 'Female', address: '303 Maple St', telephone: '555-5555', 'date-of-last-visit': '2023-08-12', 'patient-id': 'P006', 'registration-number': 'R006', branch: 'Hospital A' },
  { name: 'Tom Brown', age: 40, sex: 'Male', address: '404 Birch St', telephone: '555-1111', 'date-of-last-visit': '2023-09-25', 'patient-id': 'P007', 'registration-number': 'R007', branch: 'Hospital B' },
  { name: 'Emily Davis', age: 28, sex: 'Female', address: '505 Redwood St', telephone: '555-2222', 'date-of-last-visit': '2023-10-05', 'patient-id': 'P008', 'registration-number': 'R008', branch: 'Hospital C' },
  { name: 'Michael White', age: 35, sex: 'Male', address: '606 Pine St', telephone: '555-3333', 'date-of-last-visit': '2023-11-18', 'patient-id': 'P009', 'registration-number': 'R009', branch: 'Hospital A' },
  { name: 'Sophia Johnson', age: 33, sex: 'Female', address: '707 Cedar St', telephone: '555-4444', 'date-of-last-visit': '2023-12-02', 'patient-id': 'P010', 'registration-number': 'R010', branch: 'Hospital B' },
  { name: 'David Miller', age: 38, sex: 'Male', address: '808 Oak St', telephone: '555-6666', 'date-of-last-visit': '2023-12-20', 'patient-id': 'P011', 'registration-number': 'R011', branch: 'Hospital C' },
  { name: 'Olivia Smith', age: 29, sex: 'Female', address: '909 Maple St', telephone: '555-7777', 'date-of-last-visit': '2024-01-05', 'patient-id': 'P012', 'registration-number': 'R012', branch: 'Hospital A' },
  { name: 'Daniel Brown', age: 42, sex: 'Male', address: '101 Pine St', telephone: '555-8888', 'date-of-last-visit': '2024-02-10', 'patient-id': 'P013', 'registration-number': 'R013', branch: 'Hospital B' },
  { name: 'Ella Davis', age: 31, sex: 'Female', address: '202 Birch St', telephone: '555-9999', 'date-of-last-visit': '2024-03-15', 'patient-id': 'P014', 'registration-number': 'R014', branch: 'Hospital C' },
  { name: 'William White', age: 36, sex: 'Male', address: '303 Cedar St', telephone: '555-0000', 'date-of-last-visit': '2024-04-20', 'patient-id': 'P015', 'registration-number': 'R015', branch: 'Hospital A' },
  { name: 'Emma Johnson', age: 34, sex: 'Female', address: '404 Oak St', telephone: '555-1212', 'date-of-last-visit': '2024-05-25', 'patient-id': 'P016', 'registration-number': 'R016', branch: 'Hospital B' },
  { name: 'Christopher Black', age: 37, sex: 'Male', address: '505 Elm St', telephone: '555-2323', 'date-of-last-visit': '2024-06-30', 'patient-id': 'P017', 'registration-number': 'R017', branch: 'Hospital C' },
  { name: 'Ava Davis', age: 27, sex: 'Female', address: '606 Pine St', telephone: '555-3434', 'date-of-last-visit': '2024-07-05', 'patient-id': 'P018', 'registration-number': 'R018', branch: 'Hospital A' },
  { name: 'James White', age: 39, sex: 'Male', address: '707 Cedar St', telephone: '555-4545', 'date-of-last-visit': '2024-08-10', 'patient-id': 'P019', 'registration-number': 'R019', branch: 'Hospital B' },
  { name: 'Sophie Johnson', age: 30, sex: 'Female', address: '808 Maple St', telephone: '555-5656', 'date-of-last-visit': '2024-09-15', 'patient-id': 'P020', 'registration-number': 'R020', branch: 'Hospital C' },
];


const AllPatients = () => {
    const [searchTerm,setSearchTerm]=useState('')
    const [filteredList,setFilteredList]=useState('')

    const handleSearchTerm=(e)=>{
      setSearchTerm(e.target.value)
      setFilteredList(patientsArray.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }
 

  const navigate=useNavigate();

  const handleEnrollPatient=()=>{
              navigate('/enroll-patient')
  }

  const handleQuickEnroll=()=>{
    navigate('/quick-enroll');
}


    const itemsPerPage = 5;
    const [page, setPage] = useState(1);
    // const navigate=useNavigate();
  
    //Action Button
    const handleReportButton=(item)=>{
        navigate('/book',{state:item})
        console.log(item);
    }
  
    //Pagination
    const totalPages = Math.ceil(patientsArray.length / itemsPerPage);
  
    const handlePageChange = (newPage) => {
      setPage(newPage);
    };
  
    const renderPagination = () => {
      const paginationButtons = [];
      for (let i = 1; i <= totalPages; i++) {
        paginationButtons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={page === i ? 'active' : ''}
          >
            {i}
          </button>
        );
      }
      return paginationButtons;
    };

  return  (
    <>
    <Navbar/>
    <div className='report-table'>
      <h2 className='report-heading'>All Patients</h2>
      <div className='upper-section'>
      <div className='search-box'>
        <SearchIcon />
        <input type='text' placeholder='Type here to search for a Report' value={searchTerm} onChange={handleSearchTerm} />
      </div>
      <button className='refresh-button' onClick={()=>{setFilteredList('')}}><RefreshIcon/></button>
      <div className='add-button'>
           <button style={{backgroundColor:'#d62828'}}  onClick={handleQuickEnroll}>Quick Enrollment</button>
           <button style={{backgroundColor:'#226f54'}}  onClick={handleEnrollPatient}>Enroll a New Patient</button>
      </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Address</th>
            <th>Telephone</th>
            <th>Date of Last Visit</th>
            <th>Patient Id</th>
            <th>Registration Number</th>
           <th>Branch</th>
           <th>Actions</th>
          </tr>
        </thead>
       {(filteredList)?(
        <tbody>
          {filteredList.map((item)=>{
        return(
          <tr>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.sex}</td>
          <td>{item.address}</td>
          <td>{item.telephone}</td>
          <td>{item['date-of-last-visit']}</td>
          <td>{item['patient-id']}</td>
          <td>{item['registration-number']}</td>
          <td>{item.branch}</td>
        <td className='action-buttons'>
            <button className='report-button' onClick={()=>{handleModifyButton(item)}}>
            <BorderColorIcon/>
              Modify
            </button>
            <button className='report-button' onClick={()=>{handleReportButton(item)}}>
              <img src='./images/report-logo.png' alt='Report' />
              Book Report
            </button>
          </td>
        </tr> )
       })}
       </tbody>) :
        (<tbody>
          {patientsArray.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.sex}</td>
                <td>{item.address}</td>
                <td>{item.telephone}</td>
                <td>{item['date-of-last-visit']}</td>
                <td>{item['patient-id']}</td>
                <td>{item['registration-number']}</td>
                <td>{item.branch}</td>
              <td className='action-buttons'>
                  <button className='report-button' onClick={()=>{handleModifyButton(item)}}>
                  <BorderColorIcon/>
                    Modify
                  </button>
                  <button className='report-button' onClick={()=>{handleReportButton(item)}}>
                    <img src='./images/report-logo.png' alt='Report' />
                    Book Report
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>)
      }
      </table>

      {patientsArray.length > itemsPerPage && (
        <div className='pagination'>
          <button className='pagination-button' onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
            Previous
          </button>
          {renderPagination()}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages || patientsArray.length <= itemsPerPage * page}
          >
            Next
          </button>
        </div>
      )}
    </div>
    </>
  );
}

export default AllPatients;