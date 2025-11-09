import React from 'react';

const DataEntryForm = () => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <h2>Record Your Data</h2>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="calories" className="form-label">Calories (kcal)</label>
            <input type="number" className="form-control" id="calories" />
          </div>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">Weight (kg)</label>
            <input type="number" step="0.1" className="form-control" id="weight" />
          </div>
          <div className="mb-3">
            <label htmlFor="height" className="form-label">Height (cm)</label>
            <input type="number" step="0.1" className="form-control" id="height" />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default DataEntryForm;
