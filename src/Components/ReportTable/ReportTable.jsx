import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './reportTable.css';

const ReportTable = ({ reportList }) => {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const navigate=useNavigate();

  //Action Button
  const handleReportButton=(item)=>{
      navigate('/test',{state:item})
  }

  //Pagination
  const totalPages = Math.ceil(reportList.length / itemsPerPage);

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

  return (
    <div className='report-table'>
      <h2 className='report-heading'>Reports</h2>
      <div className='search-box'>
        <SearchIcon />
        <input type='text' placeholder='Type here to search for a Report' />
      </div>

      <table>
        <thead>
          <tr>
            <th>Report Code</th>
            <th>Report Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reportList.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  {/* <button className='report-button' onClick={()=>{handleReportButton(item)}}>
                    <img src='./images/report-icon.png' alt='Report' />
                    Go To Report
                  </button> */}
                  <Link to={item.link} className='report-button'>
                  <img src='./images/report-icon.png' alt='Report' />
                    Go To Report
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {reportList.length > itemsPerPage && (
        <div className='pagination'>
          <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
            Previous
          </button>
          {renderPagination()}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages || reportList.length <= itemsPerPage * page}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportTable;
