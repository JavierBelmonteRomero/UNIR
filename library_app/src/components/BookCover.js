import React from 'react';

const BookCover = ({ onClick, book, cover_id }) => {
    const title = book.title;

    return (
        <div className='book-cover'>
            <img
                className="book-cover-image"
                src={`https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`}
                alt={`${title} cover`}
                onClick={onClick}
            />
        </div>
    );
};

export default BookCover;