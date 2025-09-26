import React, { useState } from 'react';
import { addInterview } from '../services/InterviewService';
import { useNavigate } from 'react-router-dom';

const AddInterview = () => {
  const [form, setForm] = useState({
    candidateName: '',
    interviewerName: '',
    date: '',
    time: '',
    status: '',
    feedback: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addInterview(form);
    navigate('/');
  };

  return (
    <div>
      <h2>Add Interview</h2>
      <form onSubmit={handleSubmit}>
        <input name="candidateName" placeholder="Candidate Name" onChange={handleChange} required />
        <input name="interviewerName" placeholder="Interviewer Name" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <input name="time" type="time" onChange={handleChange} required />
        <input name="status" placeholder="Status" onChange={handleChange} required />
        <textarea name="feedback" placeholder="Feedback" onChange={handleChange}></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddInterview;
