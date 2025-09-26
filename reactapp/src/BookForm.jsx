// BookForm.js
import React, { useState } from 'react';

export default function BookForm({ onAddBook }) {
  const [form, setForm] = useState({ title: '', author: '', genre: '', description: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim() || !form.genre.trim() || !form.description.trim()) {
      return;
    }
    onAddBook(form);
    setForm({ title: '', author: '', genre: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Author" />
      <input name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Add Book</button>
    </form>
  );
}