import React from 'react';
import RemoveButton from './RemoveButton';
import ExtendRentButton from './ExtendRentButton';
import useRentHistory from '../hooks/useRentHistory';


const RentHistoryTable = ({ rentedBooks }) => {
    const { removeRentedBook, modifyRentedBookPeriod } = useRentHistory();

    return (
        <table className='rent-history-table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Rental Time</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {rentedBooks.map((rentedBook) => (
                    <tr key={rentedBook.id}>
                        <td>{rentedBook.title}</td>
                        <td>{rentedBook.rentalTime} days</td>
                        <td>
                            {/* Funciones flecha para evitar invocar las funciones en el renderizado del componente. */}
                            <RemoveButton onClick={() => removeRentedBook(rentedBook.id)} />
                            <ExtendRentButton onClick={() => modifyRentedBookPeriod(rentedBook.id, rentedBook.rentalTime + 7)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RentHistoryTable;