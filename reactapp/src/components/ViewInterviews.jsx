import React, { useEffect, useState } from 'react';
import { getAllInterviews, deleteInterview } from '../services/InterviewService';
import { Link } from 'react-router-dom';
import '../App.css';

const ViewInterviews = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getAllInterviews();
    setInterviews(res.data);
  };

  const handleDelete = async (id) => {
    await deleteInterview(id);
    loadData();
  };

  return (
    <div className="container">
      <h2>Interview List</h2>
      <div className="add-button-container">
        <Link to="/add-interview" className="link-button">➕ Add Interview</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Candidate</th>
            <th>Interviewer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Feedback</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {interviews.map(i => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.candidateName}</td>
              <td>{i.interviewerName}</td>
              <td>{i.date}</td>
              <td>{i.time}</td>
              <td>{i.status}</td>
              <td>{i.feedback}</td>
              <td className="actions">
                <Link to={`/update-interview/${i.id}`} className="link-button small">✏️</Link>
                <button onClick={() => handleDelete(i.id)} className="delete-button small">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewInterviews;
