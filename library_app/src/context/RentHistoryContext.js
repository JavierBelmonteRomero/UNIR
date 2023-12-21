import React, { createContext, useContext, useReducer } from 'react';

export const RentHistoryContext = createContext();

const rentHistoryReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_RENTED_BOOK':
        return [...state, action.payload];

      case 'REMOVE_RENTED_BOOK':
        return state.filter((book) => book.id !== action.payload);

      case 'MODIFY_RENTED_BOOK_PERIOD':
        return state.map((book) =>
          book.id === action.payload.id
            ? { ...book, rentalTime: action.payload.newPeriod }
            : book
        );

      default:
        return state;
    }
  };
  
const RentHistoryProvider = ({ children }) => {
    const [rentedBooks, dispatch] = useReducer(rentHistoryReducer, []);

    return (
      <RentHistoryContext.Provider value={{ rentedBooks, dispatch }}>
      {children}
      </RentHistoryContext.Provider>
    );
};

const useRentHistoryContext = () => {
    const context = useContext(RentHistoryContext);
    if (!context) {
      throw new Error('useRentHistoryContext must be used within a RentHistoryProvider');
    }
    return context;
};

export { RentHistoryProvider, useRentHistoryContext };