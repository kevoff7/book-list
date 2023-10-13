import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducers/bookList';

export const BookListContext = createContext();

export const BookListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const filterByGenre = event =>
    dispatch({
      type: 'FILTER_BY_GENRE',
      payload: event.target.value,
    });
  const filterByPages = event =>
    dispatch({
      type: 'FILTER_BY_PAGES',
      payload: event.target.value,
    });

  const changeFilter = books => {
    return state.filter.genre === 'Todas'
      ? books.filter(item => item.book.pages >= state.filter.pages)
      : books.filter(item => {
          return (
            item.book.pages >= state.filter.pages &&
            item.book.genre === state.filter.genre
          );
        });
  };

  const stateFilter = changeFilter(state.stateInit);
  return (
    <BookListContext.Provider
      value={{
        filter: state.filter,
        stateFilter,
        allGenres: state.allGenres,

        filterByGenre,
        filterByPages,
      }}
    >
      {children}
    </BookListContext.Provider>
  );
};
