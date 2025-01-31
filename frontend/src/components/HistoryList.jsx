import React from "react";

// Displays a list of past multiplication calculations retrieved from the database.
const HistoryList = ({ history }) => {
  return (
    <div className="mt-6 w-full max-w-md">
      {/* Header for history list */}
      <h2 className="text-lg font-semibold mb-2 text-center">Calculation History (From Database)</h2>
      <div className="bg-white p-4 rounded shadow-lg">
        
        {/* Display message when history is empty */}
        {history.length === 0 ? (
          <p className="text-gray-500 text-center">No history available.</p>
        ) : (
          <ul className="space-y-2">
            
            {/* Loop through history and display each multiplication result */}
            {history.map((item, index) => (
              <li key={index} className="bg-gray-200 p-2 rounded text-center">
                {item.number1} × {item.number2} = {item.result}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HistoryList;