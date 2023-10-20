import { useBookList } from '../hooks/useBookList';
import { FilteredByGender } from './FIlteredByGender';
import { FilteredByPage } from './FilteredByPage';

export const HeaderBooks = () => {
  const { stateFilter } = useBookList();
  return (
    <header className="flex flex-wrap">
      <h1 className="mb-5 text-5xl font-semibold tracking-wide">
        {stateFilter.length} Libros disponibles
      </h1>

      <div className="flex flex-wrap items-center w-full gap-4 font-mono text-lg sm:justify-between">
        <div className="flex flex-col">
          <p className="">Filtrar por páginas</p>
          <FilteredByPage />
        </div>
        <div className="flex flex-col">
          <p className="">Filtrar por genero</p>
          <FilteredByGender />
        </div>
      </div>
    </header>
  );
};
