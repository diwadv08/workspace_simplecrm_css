import React, { useEffect, useState } from 'react';
import { updateInterview, getInterviewById } from '../services/InterviewService';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateInterview = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    candidateName: '',
    interviewerName: '',
    date: '',
    time: '',
    status: '',
    feedback: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    getInterviewById(id).then(data => setForm(data));
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await updateInterview(id, form);
    navigate('/');
  };

  return (
    <div>
      <h2>Update Interview</h2>
      <form onSubmit={handleSubmit}>
        <input name="candidateName" value={form.candidateName} onChange={handleChange} required />
        <input name="interviewerName" value={form.interviewerName} onChange={handleChange} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="time" type="time" value={form.time} onChange={handleChange} required />
        <input name="status" value={form.status} onChange={handleChange} required />
        <textarea name="feedback" value={form.feedback} onChange={handleChange}></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateInterview;
