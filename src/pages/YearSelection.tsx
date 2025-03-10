import React from 'react';
import { useNavigate } from 'react-router-dom';

function YearSelection() {
  const navigate = useNavigate();
  const years = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Select Your Year</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {years.map((year, index) => (
            <button
              key={year}
              onClick={() => navigate(`/branch-selection/${index + 1}`)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
            >
              <h2 className="text-2xl font-semibold text-blue-600">{year}</h2>
              <p className="mt-2 text-gray-600">Click to select your branch</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YearSelection;