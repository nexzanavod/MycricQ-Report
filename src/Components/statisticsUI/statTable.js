import React from 'react';
import './StatTable.css'; // Import custom CSS file

const StatTable = () => {
  return (
    <div className="table-container">
      <table className="red-black-table">
        <thead>
          <tr>
            <th className="white-font">Name</th>
            <th className="white-font">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="white-font">John</td>
            <td className="white-font">80</td>
          </tr>
          <tr>
            <td className="white-font">Jane</td>
            <td className="white-font">75</td>
          </tr>
          <tr>
            <td className="white-font">Bob</td>
            <td className="white-font">90</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatTable;
