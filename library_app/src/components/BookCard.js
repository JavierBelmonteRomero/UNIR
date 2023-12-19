import React from 'react';
import BookCover from './BookCover';
import BookDetailsCatalog from './BookDetailsCatalog';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const key = book.key;
  const cover_id = book.cover_id;

  const navigate = useNavigate();

  const handleCoverClick = () => {
    const uniqueIdentifier = key.split('/').pop();
    navigate(`/book/${uniqueIdentifier}/${cover_id}`);
  };

  return (
    <div className='book-card'>
      <BookCover book={book} onClick={handleCoverClick} cover_id={cover_id}/>
      <BookDetailsCatalog book={book} />
    </div>
  );
};

export default BookCard;