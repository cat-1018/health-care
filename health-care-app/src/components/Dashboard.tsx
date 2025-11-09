import React from 'react';

const Dashboard = () => {
  // Dummy data for now
  const records = [
    { date: '2025-11-09', calories: 2200, weight: 75, height: 175 },
    { date: '2025-11-08', calories: 2500, weight: 75.2, height: 175 },
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h2>Your Records</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Calories (kcal)</th>
              <th scope="col">Weight (kg)</th>
              <th scope="col">Height (cm)</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.calories}</td>
                <td>{record.weight}</td>
                <td>{record.height}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
