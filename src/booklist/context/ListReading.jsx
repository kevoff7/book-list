import { useState, createContext } from 'react';

export const ListReadingContext = createContext();

export const ListReadingProvider = ({ children }) => {
  const [listReading, setListReading] = useState([]);
  const addBookListReading = book => {
    const productInCartIndex = listReading.findIndex(
      item => item.book.ISBN === book.book.ISBN,
    );
    if (productInCartIndex >= 0) return;
    const newBook = structuredClone(book);
    newBook.isReadingList = true;
    return setListReading(prevState => [...prevState, newBook]);
  };
  const removeBookListReading = book => {
    const newList = listReading.filter(
      item => item.book.ISBN !== book.book.ISBN,
    );
    setListReading(newList);
  };
  return (
    <ListReadingContext.Provider
      value={{ listReading, addBookListReading, removeBookListReading }}
    >
      {children}
    </ListReadingContext.Provider>
  );
};
