import { useId } from 'react';
import { useBookList } from '../hooks/useBookList';

export const FilteredByPage = () => {
  const { filter, filterByPages } = useBookList();
  const pagesFilterId = useId();
  return (
    <>
      <label
        htmlFor={pagesFilterId}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      />
      <div className="flex items-center gap-3">
        <p>min:{filter.minPage}</p>
        <input
          id={pagesFilterId}
          type="range"
          min={filter.minPage}
          max={filter.maxPage}
          value={filter.pages}
          onChange={(event) => filterByPages(event)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <p>Paginas:{filter.pages}</p>
      </div>
    </>
  );
};
