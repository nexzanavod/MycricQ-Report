import React, { useState } from 'react';
import './StatTable.css'; // Import custom CSS file

const StatTable = (cusData) => {
  const leaderboardData = cusData.campaignData.attributes.leaderboards.data;

  // Set the number of items displayed per page
  const itemsPerPage = 10;

  // Calculate the total number of pages based on the number of items and items per page
  const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);

  // Initialize the state for the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for items to be displayed on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the leaderboardData array to get the items for the current page
  const currentItems = leaderboardData.slice(startIndex, endIndex);

  return (
    <div>
      <div className="table-container">
        <table className="red-black-table">
          <thead>
            <tr>
              <th className="white-font">Name</th>
              <th className="white-font">Score</th>
            </tr>
          </thead>
          <tbody>
            {/* Use map to iterate over the currentItems and add rows to the tbody */}
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td className="white-font">{item.attributes.player}</td>
                <td className="white-font">{item.attributes.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='text-center flex-wrap bg-red-900 m-3 p-0'>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`m-3 p-1 text-white ${currentPage === 1 ? 'opacity-50 cursor-default' : 'hover:bg-red-500'}`}
        >
          Previous
        </button>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`m-3 p-1 text-white ${currentPage === totalPages ? 'opacity-50 cursor-default' : 'hover:bg-red-500'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StatTable;
