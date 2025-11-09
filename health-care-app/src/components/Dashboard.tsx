import React from 'react';
import { Record } from '../App'; // App.tsxから型をインポート
import WeightChart from './WeightChart';
import BmiChart from './BmiChart';

interface DashboardProps {
  records: Record[];
}

const Dashboard: React.FC<DashboardProps> = ({ records }) => {
  const showCharts = records.length >= 2;

  return (
    <>
      {showCharts && (
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <WeightChart records={records} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <BmiChart records={records} />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="card">
        <div className="card-header">
          <h2>Your Records</h2>
        </div>
        <div className="card-body">
          {records.length === 0 ? (
            <p className="text-center">No records yet. Add your first record above!</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover mb-0">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Calories (kcal)</th>
                    <th scope="col">Weight (kg)</th>
                    <th scope="col">Height (cm)</th>
                    <th scope="col">BMI</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record, index) => (
                    <tr key={index}>
                      <td>{record.date}</td>
                      <td>{record.calories}</td>
                      <td>{record.weight}</td>
                      <td>{record.height}</td>
                      <td>{record.bmi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
