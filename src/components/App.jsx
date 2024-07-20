import React, { useEffect, useState } from 'react';
import BookList from './BookList';
import favoriteBooksData from './BookLib/favoriteBooks.json';

export const App = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Directly set the imported JSON data
    setFavoriteBooks(favoriteBooksData);
    // console.log(value);
    console.log("Mounting phase: same when componentDidUpdate runs");
  }, [value]);


  return (
    <div>
      <h1>Favorite Books</h1>
      <BookList books={favoriteBooks} />
      <button onClick={() => setValue(value+1)}>{value}</button>
    </div>
  );
};

export default App;
