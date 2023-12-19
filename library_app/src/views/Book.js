import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookCover from '../components/BookCover';
import BookDetails from '../components/BookDetails';

const Book = () => {
    const { key, cover_id } = useParams();
    const [book, setBook] = useState([]);

    useEffect(() => {
        const fetchBook = async () => {
          try {
            const response = await fetch(`https://openlibrary.org/works/${key}.json`);
            const data = await response.json();
            setBook(data);
          } catch (error) {
            console.error('Error fetching books:', error);
          }
        };
        fetchBook();
    }, [key]);

    return (
        <div className="book-detail-container">
          <BookCover book={book} cover_id={cover_id} />
          <BookDetails book={book} />
        </div>
    );
};

export default Book;