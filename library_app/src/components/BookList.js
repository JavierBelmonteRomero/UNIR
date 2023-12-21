import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, subject }) => {
  return (
    <div className='book-list'>
      {books.map((book) => (
        <BookCard book={book} subject={subject} />
      ))}
    </div>
  );
};

export default BookList;