// ReviewForm.js
import React, { useState } from 'react';

export default function ReviewForm({ books, onAddReview }) {
  const [form, setForm] = useState({ bookId: '', reviewer: '', content: '', rating: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.bookId || !form.reviewer.trim() || !form.content.trim() || !form.rating) {
      return;
    }
    onAddReview(form);
    setForm({ bookId: '', reviewer: '', content: '', rating: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="bookId" value={form.bookId} onChange={handleChange}>
        <option value="">Select Book</option>
        {books && books.map(book => (
          <option key={book.id} value={book.id}>{book.title}</option>
        ))}
      </select>
      <input name="reviewer" value={form.reviewer} onChange={handleChange} placeholder="Reviewer" />
      <input name="content" value={form.content} onChange={handleChange} placeholder="Review" />
      <input name="rating" type="number" min="1" max="5" value={form.rating} onChange={handleChange} placeholder="Rating" />
      <button type="submit">Add Review</button>
    </form>
  );
}
