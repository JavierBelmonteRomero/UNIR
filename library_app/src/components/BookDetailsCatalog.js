import React from 'react';

const BookDetailsCatalog = ({ book }) => {
    const title = book.title;
    const author_name = book.authors[0]?.name;
    const first_publish_year = book.first_publish_year;

    return (
        <div className="book-details">
            <h3>{title}</h3>
            <p>Author: {author_name}</p>
            <p>Year: {first_publish_year}</p>
        </div>
    );
};

export default BookDetailsCatalog;