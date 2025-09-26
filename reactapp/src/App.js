// App.js
import React, { useEffect, useState } from 'react';
import BookForm from './BookForm';
import ReviewForm from './ReviewForm';
import BookList from './BookList';
import { getBooks, addBook, addReview } from './api';

export default function App() {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleAddBook = async (book) => {
    await addBook(book);
    await loadBooks();
  };

  const handleAddReview = async (review) => {
    await addReview(review);
    await loadBooks();
  };

  return (
    <div>
      <h1>Book Review App</h1>
      <BookForm onAddBook={handleAddBook} />
      <ReviewForm books={books} onAddReview={handleAddReview} />
      <BookList books={books} />
    </div>
  );
}

