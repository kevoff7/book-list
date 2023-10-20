import { useState, createContext, useEffect } from 'react';
import type { ContextProps, DataBooks } from '../../type.d';

interface ListReadingContextType {
  listReading: DataBooks[];
  addBookListReading: (book: DataBooks) => void;
  removeBookListReading: (book: DataBooks) => void;
}

export const ListReadingContext = createContext({} as ListReadingContextType);

const localStorageList = localStorage.getItem('list');
const initialState =
  localStorageList !== null ? JSON.parse(localStorageList) : [];

export const ListReadingProvider = ({ children }: ContextProps) => {
  const [listReading, setListReading] = useState<DataBooks[]>(
    () => initialState
  );
  const addBookListReading = (book: DataBooks) => {
    const productInCartIndex = listReading.findIndex(
      (item) => item.book.ISBN === book.book.ISBN
    );
    if (productInCartIndex >= 0) return;
    const newBook = structuredClone(book);
    newBook.isReadingList = true;
    return setListReading((prevState) => [...prevState, newBook]);
  };
  const removeBookListReading = (book: DataBooks) => {
    const newList = listReading.filter(
      (item) => item.book.ISBN !== book.book.ISBN
    );
    setListReading(newList);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(listReading));
  }, [listReading]);
  return (
    <ListReadingContext.Provider
      value={{ listReading, addBookListReading, removeBookListReading }}
    >
      {children}
    </ListReadingContext.Provider>
  );
};
