import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h2>Interview Scheduler</h2>
      <p>Welcome to the Interview Management System!</p>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/add-interview">
          <button>Add Interview</button>
        </Link>
        <Link to="/view-interviews" style={{ marginLeft: '1rem' }}>
          <button>View Interviews</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
