import React, { useState } from 'react';
import "../css/pendingorder.css";
import SearchBar from "./SearchBar";
import sampleData from './sampledata';

function PendingOrder() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const [searchText, setSearchText] = useState('');

  // Calculate the total number of pages
  const totalPages = Math.ceil(sampleData.length / recordsPerPage);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle search text changes
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = sampleData.filter((record) =>
    record.company.toLowerCase().includes(searchText.toLowerCase()) ||
    record.contact.toLowerCase().includes(searchText.toLowerCase()) ||
    record.country.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>

      <div className='containerbox'>
        <div className='tablebox'>
          <h1>PendingOrder</h1>
          <table id="customers">
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            {filteredData
              .slice(
                (currentPage - 1) * recordsPerPage,
                currentPage * recordsPerPage
              )
              .map((record, index) => (
                <tr key={index}>
                  <td>{record.company}</td>
                  <td>{record.contact}</td>
                  <td>{record.country}</td>
                </tr>
              ))}
          </table>
          <div className="pagination">
            {currentPage > 1 && (
              <button onClick={() => handlePageChange(1)}>&lt;&lt;</button>
            )}
            {currentPage > 1 && (
              <button onClick={() => handlePageChange(currentPage - 1)}>&lt;</button>
            )}
            <span>{currentPage}</span>
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>
            )}
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(totalPages)}>&gt;&gt;</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PendingOrder;
