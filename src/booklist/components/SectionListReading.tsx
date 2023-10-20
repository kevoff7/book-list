import { useListReading } from '../hooks/useListReading';
import { ReadingList } from './ReadingList';

export const SectionListReading = () => {
  const { listReading } = useListReading();
  return (
    <section className="h-full px-8 mt-10 text-center lg:mt-0">
      <h2 className="text-4xl lg:text-5xl"> Lista de lectura</h2>
      {listReading.length > 0 ? (
        <p className="mt-5 text-lg font-semibold tracking-wide lg:text-2xl">
          libros en la lista de lectura {listReading.length}
        </p>
      ) : (
        <p className="mt-5 text-lg font-semibold tracking-wide lg:text-2xl">
          lista vacía
        </p>
      )}
      {listReading.length > 0 && <ReadingList />}
    </section>
  );
};
