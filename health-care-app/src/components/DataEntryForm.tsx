import React, { useState } from 'react';
import { NewRecordData } from '../App'; // App.tsxから型をインポート

interface DataEntryFormProps {
  onAddRecord: (record: NewRecordData) => void;
}

const DataEntryForm: React.FC<DataEntryFormProps> = ({ onAddRecord }) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // 今日の日付を初期値に
  const [calories, setCalories] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !calories || !weight || !height) {
      alert('Please fill out all fields.');
      return;
    }

    onAddRecord({
      date,
      calories: Number(calories),
      weight: Number(weight),
      height: Number(height),
    });

    // フォームをクリア (日付はそのまま)
    setCalories('');
    setWeight('');
    // 身長はあまり変わらないのでクリアしないでおく
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h2>Record Your Data</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="date" className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="calories" className="form-label">Calories (kcal)</label>
              <input
                type="number"
                className="form-control"
                id="calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="weight" className="form-label">Weight (kg)</label>
              <input
                type="number"
                step="0.1"
                className="form-control"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="height" className="form-label">Height (cm)</label>
              <input
                type="number"
                step="0.1"
                className="form-control"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">Save Record</button>
        </form>
      </div>
    </div>
  );
};

export default DataEntryForm;
