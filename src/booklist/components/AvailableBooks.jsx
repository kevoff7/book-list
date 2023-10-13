import { ListBooks } from './ListBooks';

export const AvailableBooks = ({ books }) => {
  return (
    <article className='mt-10'>
      <ul className='grid grid-cols-5 gap-4'>
        <ListBooks books={books} />
      </ul>
    </article>
  );
};
