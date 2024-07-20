import BookList from './BookList';

export const App = () => {
  const favoriteBooks = [
    {id: "id-01", name: "HTML"},
    {id: "id-02", name: "CSS"},
    {id: "id-03", name: "Javascript"},
    {id: "id-04", name: "React"},
    {id: "id-05", name: "Redux"},
    {id: "id-06", name: "NodeJS"},
  ];
  return (
    <div>
      <BookList books={favoriteBooks}/>
    </div>
  );
};
