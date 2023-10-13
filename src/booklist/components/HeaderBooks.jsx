import { useBookList } from '../hooks/useBookList';
import { FilteredByGender } from './FIlteredByGender';
import { FilteredByPage } from './FilteredByPage';

export const HeaderBooks = () => {
  const { stateFilter } = useBookList();
  return (
    <header className=''>
      <h1 className='text-5xl font-semibold tracking-wide mb-5'>
        {stateFilter.length} Libros disponibles
      </h1>

      <div className='flex gap-20 font-mono text-lg'>
        <div className='flex flex-col'>
          <p className=''>Filtrar por páginas</p>
          <FilteredByPage />
        </div>
        <div className='flex flex-col'>
          <p className=''>Filtrar por genero</p>
          <FilteredByGender />
        </div>
      </div>
    </header>
  );
};
