import { DataBooks } from '../../type.d';
export const getPagesMinMaxByGenre = (books: DataBooks[]) => {
  let maxPage = 0;
  let minPage = 0;
  for (const key in books) {
    maxPage = Math.max(maxPage, books[key].book.pages);
    if (minPage === 0) {
      minPage = books[key].book.pages;
    }
    minPage = Math.min(minPage, books[key].book.pages);
  }
  return { maxPage, minPage };
};
