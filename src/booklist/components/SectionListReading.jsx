import { useListReading } from '../hooks/useListReading';
import { ReadingList } from './ReadingList';

export const SectionListReading = () => {
  const { listReading } = useListReading();
  return (
    <section className='text-center'>
      <p className='text-2xl font-semibold tracking-wide'>
        en la lista de lectura
      </p>
      <h2 className='text-5xl py-6'>{listReading.length} Lista de lectura</h2>
      <ReadingList />
    </section>
  );
};
