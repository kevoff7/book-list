import { useListReading } from '../hooks/useListReading';

export const ListBooks = ({ books }) => {
  const { addBookListReading, listReading, removeBookListReading } =
    useListReading();
  const checkProductInBookList = book => {
    return listReading.some(item => item.book.ISBN === book.book.ISBN);
  };
  return (
    <>
      {books.map(book => {
        const isCheck = checkProductInBookList(book);
        return (
          <li
            key={book.book.ISBN}
            className='rounded-lg overflow-hidden text-center'
          >
            <div className='h-full'>
              <img
                className='h-5/6 w-full'
                src={book.book.cover}
                alt={book.book.title}
              />
              {book.isReadingList || isCheck ? (
                <button
                  className='bg-red-800 py-1 rounded-b-lg w-full'
                  onClick={() => removeBookListReading(book)}
                >
                  Remover
                </button>
              ) : (
                <button
                  className='bg-slate-950 py-2 w-full rounded-b-lg'
                  onClick={() => addBookListReading(book)}
                >
                  Agregar
                </button>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
};
