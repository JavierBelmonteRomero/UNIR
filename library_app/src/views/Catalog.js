import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookList from '../components/BookList';

const Catalog = () => {
  const { subject } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://openlibrary.org/subjects/${subject}.json`);
        const data = await response.json();
        setBooks(data.works);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    if (subject.trim() !== '') {
      fetchBooks();
    }

  }, [subject]);

  return (
    <div className="container">
      <h2>Books </h2>
      {loading ? (
        <div className="spinner"></div>
      ) : <BookList books={books} subject={subject} /> }
    </div>
  );
};

export default Catalog;