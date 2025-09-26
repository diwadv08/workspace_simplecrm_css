import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddInterview from './components/AddInterview';
import UpdateInterview from './components/UpdateInterview';
import ViewInterviews from './components/ViewInterviews';
import Home from './components/Home'; // ⬅️ new import
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* ⬅️ home route */}
        <Route path="/add-interview" element={<AddInterview />} />
        <Route path="/update-interview/:id" element={<UpdateInterview />} />
        <Route path="/interviews" element={<ViewInterviews />} />
      </Routes>
    </Router>
  );
}

export default App;
