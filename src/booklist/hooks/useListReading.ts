import { useContext } from 'react';
import { ListReadingContext } from '../context/ListReading';

export const useListReading = () => {
  const context = useContext(ListReadingContext);
  if (context === undefined) {
    throw new Error('fail connect provider');
  }
  return context;
};
