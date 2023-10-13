import { useListReading } from '../hooks/useListReading';
import { ListBooks } from './ListBooks';

export const ReadingList = () => {
  const { listReading } = useListReading();
  return (
    <article className='mt-10 rounded-lg border border-gray-400 h-screen p-8'>
      <ul className='grid grid-cols-3 gap-4'>
        <ListBooks books={listReading} />
      </ul>
    </article>
  );
};
