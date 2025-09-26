// BookList.js
import React from 'react';

export default function BookList({ books }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Description</th>
          <th>Average Rating</th>
        </tr>
      </thead>
      <tbody>
        {books && books.map(book => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.description}</td>
            <td>{book.averageRating || 'No reviews yet'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
