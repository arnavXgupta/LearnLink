import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function BranchSelection() {
  const navigate = useNavigate();
  const { year } = useParams();
  
  const branches = [
    'Computer Science',
    'Electronics and Computer Engineering',
  ];  

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Select Your Branch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {branches.map((branch) => (
            <button
              key={branch}
              onClick={() => navigate(`/subjects/${year}/${branch.toLowerCase().replace(/\s+/g, '-')}`)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
            >
              <h2 className="text-2xl font-semibold text-blue-600">{branch}</h2>
              <p className="mt-2 text-gray-600">View subjects</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BranchSelection;