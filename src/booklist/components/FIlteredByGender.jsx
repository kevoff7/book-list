import { useId } from 'react';
import { useBookList } from '../hooks/useBookList';

export const FilteredByGender = () => {
  const { filter, filterByGenre, allGenres } = useBookList();
  const genreFilterId = useId();
  return (
    <>
      <label htmlFor={genreFilterId}>Catergoria</label>
      <select
        id={genreFilterId}
        value={filter.genre}
        onChange={event => filterByGenre(event)}
        className='bg-slate-800'
      >
        <option value='Todas'>Todas</option>
        {allGenres.map(genre => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </>
  );
};
