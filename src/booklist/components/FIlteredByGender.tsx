import { useId } from 'react';
import { useBookList } from '../hooks/useBookList';

export const FilteredByGender = () => {
  const { filter, filterByGenre, allGenres } = useBookList();
  const genreFilterId = useId();
  return (
    <>
      <label htmlFor={genreFilterId}>Categoria</label>
      <select
        id={genreFilterId}
        value={filter.genre}
        onChange={(event) => filterByGenre(event)}
        className="w-full bg-slate-800"
      >
        <option className="w-11" value="Todas">
          Todas
        </option>
        {allGenres.map((genre) => (
          <option className="w-10" key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </>
  );
};
