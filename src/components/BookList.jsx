const BookList = ({books}) => {
    return (
        <ul>
            {books.map(book => (<li>{book.name}</li>))}
        </ul>
    );
};

export default BookList;