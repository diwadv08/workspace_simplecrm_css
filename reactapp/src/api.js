// api.js
export const getBooks = async () => {
    const res = await fetch('http://localhost:8080/books');
    return res.json();
  };
  
  export const addBook = async (book) => {
    await fetch('http://localhost:8080/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
  };
  
  export const addReview = async (review) => {
    await fetch('http://localhost:8080/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review)
    });
  };
  
  
  