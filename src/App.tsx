import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import YearSelection from './pages/YearSelection';
import BranchSelection from './pages/BranchSelection';
import SubjectList from './pages/SubjectList';
import PDFList from './pages/PDFList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/year-selection" element={<YearSelection />} />
        <Route path="/branch-selection/:year" element={<BranchSelection />} />
        <Route path="/subjects/:year/:branch" element={<SubjectList />} />
        <Route path="/pdfs/:year/:branch/:subject" element={<PDFList />} />
      </Routes>
    </Router>
  );
}

export default App;