import React, { useContext } from 'react';
import BookRentOptions from './BookRentOptions';
import { RentHistoryContext } from '../context/RentHistoryContext';

const BookDetails = ({ book, subject }) => {
    const description = book.description;
    const { rentedBooks } = useContext(RentHistoryContext);
    const isBookRented = rentedBooks.some((rentedBook) => rentedBook.id === book.id);

    return (
        <div className="book-details">
            {description && typeof description === 'object' ? (<p>Synopsis: {description.value}</p>) : (<p>Synopsis: {description}</p>)}
            {!isBookRented && (<BookRentOptions book={book} subject={subject} />)}
        </div>
    );
};

export default BookDetails;