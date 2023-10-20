import { library } from '../data/books.json';

export function getAllGenreBooks() {
  const data = library.map((book) => book.book.genre);
  const uniqueArray = Array.from(new Set(data));
  return uniqueArray;
}
