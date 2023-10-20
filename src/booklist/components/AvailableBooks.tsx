import type { DataBooks } from '../../type.d';
import { ListBooks } from './ListBooks';

export const AvailableBooks = ({ books }: { books: DataBooks[] }) => {
  return (
    <article className="mt-10">
      <ul className="grid grid-cols-3 gap-4 lg:grid-cols-4">
        <ListBooks books={books} />
      </ul>
    </article>
  );
};
