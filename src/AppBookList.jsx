import { AvailableBooks } from './booklist/components/AvailableBooks';
import { HeaderBooks } from './booklist/components/HeaderBooks';
import { SectionListReading } from './booklist/components/SectionListReading';
import { ListReadingProvider } from './booklist/context/ListReading';
import { useBookList } from './booklist/hooks/useBookList';

export const AppBookList = () => {
  const { stateFilter = [] } = useBookList();
  return (
    <ListReadingProvider>
      <div className='bg-slate-900 h-screen lg:h-full  text-white'>
        <div className='container mx-auto grid grid-cols-3 px-6 py-10 grid-rows-1 w-full'>
          <section className='col-span-2 px-8'>
            <HeaderBooks />
            <AvailableBooks books={stateFilter} />
          </section>
          <SectionListReading />
        </div>
      </div>
    </ListReadingProvider>
  );
};
