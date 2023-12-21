import React, { useContext } from 'react';
import { RentHistoryContext } from '../context/RentHistoryContext';
import RentHistoryTable from '../components/RentHistoryTable';

const RentHistory = () => {
    const { rentedBooks } = useContext(RentHistoryContext);

    return (
        <div className='container'>
            <h2>Rent History</h2>
            {rentedBooks.length === 0 ? (<p>No rented books at the moment.</p>) : (<RentHistoryTable rentedBooks={rentedBooks} />)}
        </div>
    );
};

export default RentHistory;