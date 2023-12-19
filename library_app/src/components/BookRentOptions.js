import React, { useState } from 'react';
import RentButton from './RentButton';
import ExtendRentButton from './ExtendRentButton';
import useRentHistory from '../hooks/useRentHistory';

const BookRentOptions = ({ book }) => {
    const [rentalDays, setRentalDays] = useState(7);
    const [isRented, setIsRented] = useState(false);

    const [rentedBookId, setRentedBookId] = useState(null);
    const { addRentedBook, modifyRentedBookPeriod } = useRentHistory();

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
                    <RentButton onClick={handleRent} />
                    <ExtendRentButton onClick={handleExtendRent} />
                </div>
            )}
        </div>
    );
};

export default BookRentOptions;