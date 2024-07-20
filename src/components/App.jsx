import React, { useEffect, useState } from 'react';
import BookList from './BookList';
import favoriteBooksData from './BookLib/favoriteBooks.json';

export const App = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    // Directly set the imported JSON data
    setFavoriteBooks(favoriteBooksData);
  }, []);


  return (
    <div>
      <h1>Favorite Books</h1>
      <BookList books={favoriteBooks} />
    </div>
  );
};

export default App;
