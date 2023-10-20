import { useListReading } from '../hooks/useListReading';
import type { DataBooks } from '../../type.d';

export const ListBooks = ({ books }: { books: DataBooks[] }) => {
  const { addBookListReading, listReading, removeBookListReading } =
    useListReading();
  const checkProductInBookList = (book: DataBooks) => {
    return listReading.some((item) => item.book.ISBN === book.book.ISBN);
  };
  return (
    <>
      {books.map((book) => {
        const isCheck = checkProductInBookList(book);
        return (
          <li
            key={book.book.ISBN}
            className="flex flex-col overflow-hidden rounded-lg"
          >
            <div className="w-full h-full">
              <img
                className="w-full h-full overflow-hidden"
                src={book.book.cover}
                alt={book.book.title}
              />
            </div>
            {book.isReadingList || isCheck ? (
              <button
                className="w-full py-2 bg-red-800"
                onClick={() => removeBookListReading(book)}
              >
                Remover
              </button>
            ) : (
              <button
                className="w-full py-2 bg-slate-950"
                onClick={() => addBookListReading(book)}
              >
                Agregar
              </button>
            )}
          </li>
        );
      })}
    </>
  );
};
