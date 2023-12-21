import React, { useState } from 'react';
import Button from './Button';
import useRentHistory from '../hooks/useRentHistory';
import { useNavigate } from 'react-router-dom';

const BookRentOptions = ({ book, subject }) => {
    const [rentalDays, setRentalDays] = useState(7);
    const [isRented, setIsRented] = useState(false);

    const [rentedBookId, setRentedBookId] = useState(null);
    const { addRentedBook, modifyRentedBookPeriod } = useRentHistory();
    const navigate = useNavigate();

    const handleCoverClick = () => {
        navigate(`/catalog/${subject}`);
    };

    const handleRent = () => {
        setIsRented(true);
        const id = addRentedBook(book.title, rentalDays);
        setRentedBookId(id);
    };

    const handleExtendRent = () => {
        setRentalDays((prevDays) => prevDays + 7);
        if (rentedBookId) {
            modifyRentedBookPeriod(rentedBookId, rentalDays);
        } else {
            console.error('Error: Could not find the ID of the rented book.');
        }
    };

    return (
        <div>
            <h3>Availability:</h3>
            {isRented ? <p>This book is currently rented.</p> : <p>This book is available for rent.</p>}
            {isRented ? (
                <></>
            ) : (
                <div>
                    <h3>Rent Options:</h3>
                    <p>Rental Period: {rentalDays} days</p>
                    <Button className={'rent-button'} onClick={handleRent} description={'Rent'} />
                    <Button className={'extend-rent-button'} onClick={handleExtendRent} description={'Extend Rent'} />
                    <Button className={'back-to-catalog-button'} onClick={handleCoverClick} description={'Back'} />
                </div>
            )}
        </div>
    );
};

export default BookRentOptions;