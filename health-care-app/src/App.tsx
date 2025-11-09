import React from 'react';
import './App.css';
import Header from './components/Header';
import DataEntryForm from './components/DataEntryForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <DataEntryForm />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
