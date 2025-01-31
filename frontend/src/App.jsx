import React, { useEffect, useState } from 'react';
import MultiplicationForm from './components/MultiplicationForm';
import HistoryList from './components/HistoryList';
import axios from 'axios';

// API URL for fetching multiplication history
const API_URL = `${import.meta.env.VITE_REACT_APP_API_URL}/multiplications/`;

// Manages the multiplication history and updates when new results are added.
const App = () => {
  const [history, setHistory] = useState([]);

  // Fetch history when page loads
  useEffect(() => {
    fetchHistory();
  }, []);

  // Fetch multiplication history from the backend API
  const fetchHistory = async () => {
    try {
      const response = await axios.get(API_URL);
      setHistory(response.data || []);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  
  // Update the history state when a new multiplication result is added
  const handleNewResult = async (newResult) => {
    setHistory((prevHistory) => [newResult, ...prevHistory]); // Add new result at the top
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      {/* Multiplication Form Component */}
      <MultiplicationForm onNewResult={handleNewResult} />
      
      {/* History List Component */}
      <HistoryList history={history} />
    </div>
  );
};

export default App;
