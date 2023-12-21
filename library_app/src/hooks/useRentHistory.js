import { useRentHistoryContext } from '../context/RentHistoryContext';

const useRentHistory = () => {
  const { rentedBooks, dispatch } = useRentHistoryContext();

  const addRentedBook = (title, rentalTime) => {
    const rentedBook = { id: Date.now(), title, rentalTime };
    dispatch({ type: 'ADD_RENTED_BOOK', payload: rentedBook });
    return rentedBook.id;
  };

  const removeRentedBook = (id) => {
    dispatch({ type: 'REMOVE_RENTED_BOOK', payload: id });
  };

  const modifyRentedBookPeriod = (id, newPeriod) => {
    dispatch({ type: 'MODIFY_RENTED_BOOK_PERIOD', payload: { id, newPeriod } });
  };

  return {
    rentedBooks,
    addRentedBook,
    removeRentedBook,
    modifyRentedBookPeriod
  };
};

export default useRentHistory;