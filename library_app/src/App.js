import React from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import { RentHistoryProvider } from './context/RentHistoryContext';

function App() {
  return (
    <RentHistoryProvider>
      <GlobalRouter></GlobalRouter>
    </RentHistoryProvider>
  );
}

export default App;