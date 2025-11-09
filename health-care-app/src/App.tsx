import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import DataEntryForm from './components/DataEntryForm';
import Dashboard from './components/Dashboard';

// データ構造の型定義
export interface Record {
  date: string;
  calories: number;
  weight: number;
  height: number;
  bmi: number;
}

// 新しい記録の入力データの型定義 (BMIは計算されるため不要)
export type NewRecordData = Omit<Record, 'bmi'>;

function App() {
  // localStorageからデータを読み込んでstateを初期化
  const [records, setRecords] = useState<Record[]>(() => {
    const savedRecords = localStorage.getItem('healthRecords');
    if (savedRecords) {
      return JSON.parse(savedRecords);
    } else {
      return [];
    }
  });

  // recordsが更新されたらlocalStorageに保存
  useEffect(() => {
    localStorage.setItem('healthRecords', JSON.stringify(records));
  }, [records]);

  // 新しい記録を追加する関数
  const addRecord = (newRecordData: NewRecordData) => {
    if (!newRecordData.height || !newRecordData.weight) {
      alert("Height and Weight are required to calculate BMI.");
      return;
    }
    // BMIを計算 (身長はメートルに変換)
    const heightInMeters = newRecordData.height / 100;
    const bmi = parseFloat((newRecordData.weight / (heightInMeters * heightInMeters)).toFixed(2));

    const newRecord: Record = {
      ...newRecordData,
      bmi: bmi,
    };

    // 日付順にソートしてstateを更新
    setRecords(prevRecords => [...prevRecords, newRecord].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
  };

  return (
    <div className="App">
      <Header />
      <main className="container">
        <DataEntryForm onAddRecord={addRecord} />
        <Dashboard records={records} />
      </main>
    </div>
  );
}

export default App;
