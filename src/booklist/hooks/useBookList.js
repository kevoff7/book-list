import { useContext } from 'react';
import { BookListContext } from '../context/BookList';

export const useBookList = () => {
  const context = useContext(BookListContext);
  if (context === undefined) {
    throw new Error('useBookList must be used within a BookListProvider');
  }
  return context;
};
