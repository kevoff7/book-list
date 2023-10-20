import { State, Action } from '../../type.d';
import { library } from '../data/books.json';
import { getAllGenreBooks } from '../helpers/getAllGenreBooks';
import { getPagesMinMaxByGenre } from '../helpers/getPagesMinMaxByGenre';

const allGenres = getAllGenreBooks();
const { maxPage, minPage } = getPagesMinMaxByGenre(library);

export const initialState: State = {
  stateInit: library,
  filter: {
    genre: 'Todas',
    pages: 200,
    maxPage,
    minPage
  },
  allGenres
};

export const reducer = (state: State, action: Action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case 'FILTER_BY_GENRE': {
      const newFilter = structuredClone(state.filter);
      newFilter.genre = actionPayload;
      return {
        ...state,
        filter: newFilter
      };
    }
    case 'FILTER_BY_PAGES': {
      const newFilter = structuredClone(state.filter);
      newFilter.pages = Number(actionPayload);
      return {
        ...state,
        filter: newFilter
      };
    }
    default:
      return state;
  }
};
