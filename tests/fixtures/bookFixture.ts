import { getAllGenreBooks } from '../../src/booklist/helpers/getAllGenreBooks';
import { getPagesMinMaxByGenre } from '../../src/booklist/helpers/getPagesMinMaxByGenre';
import { State } from '../../src/type';
import { library } from '../../src/booklist/data/books.json';
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
