import { useListReading } from '../hooks/useListReading';
import { ListBooks } from './ListBooks';

export const ReadingList = () => {
  const { listReading } = useListReading();
  return (
    <article className="p-8 mt-10 border border-gray-400 rounded-lg">
      <ul className="grid grid-cols-3 gap-4">
        <ListBooks books={listReading} />
      </ul>
    </article>
  );
};
