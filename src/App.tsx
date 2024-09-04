import React from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
