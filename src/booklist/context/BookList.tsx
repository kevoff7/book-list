import { createContext, useEffect, useReducer } from 'react';
import { initialState, reducer } from '../reducers/bookList';
import { typeStateFilter, DataBooks, ContextProps, Types } from '../../type.d';

interface BookListContextType {
  filterByGenre: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  filterByPages: (event: React.ChangeEvent<HTMLInputElement>) => void;
  stateFilter: DataBooks[];
  allGenres: string[];
  filter: typeStateFilter;
}

export const BookListContext = createContext({} as BookListContextType);

const state = localStorage.getItem('state');
const init = state !== null ? JSON.parse(state) : initialState;

export const BookListProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, init);

  const filterByGenre = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch({
      type: Types.FILTER_BY_GENRE,
      payload: event.target.value
    });
  const filterByPages = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: Types.FILTER_BY_PAGES,
      payload: event.target.value
    });

  const changeFilter = (books: DataBooks[]) => {
    return state.filter.genre === 'Todas'
      ? books.filter((item) => item.book.pages >= state.filter.pages)
      : books.filter((item) => {
          return (
            item.book.pages >= state.filter.pages &&
            item.book.genre === state.filter.genre
          );
        });
  };

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  const stateFilter = changeFilter(state.stateInit);
  return (
    <BookListContext.Provider
      value={{
        filter: state.filter,
        stateFilter,
        allGenres: state.allGenres,

        filterByGenre,
        filterByPages
      }}
    >
      {children}
    </BookListContext.Provider>
  );
};
