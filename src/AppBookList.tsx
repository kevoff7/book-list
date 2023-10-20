import { AvailableBooks } from './booklist/components/AvailableBooks';
import { HeaderBooks } from './booklist/components/HeaderBooks';
import { SectionListReading } from './booklist/components/SectionListReading';
import { ListReadingProvider } from './booklist/context/ListReading';
import { useBookList } from './booklist/hooks/useBookList';

export const AppBookList = () => {
  const { stateFilter } = useBookList();
  return (
    <ListReadingProvider>
      <div className="min-h-screen text-white bg-slate-900">
        <main className="container grid grid-cols-1 grid-rows-1 px-6 py-10 mx-auto lg:grid-cols-3 lg:grid-rows-1">
          <section className="col-span-2 px-8">
            <HeaderBooks />
            <AvailableBooks books={stateFilter} />
          </section>
          <SectionListReading />
        </main>
      </div>
    </ListReadingProvider>
  );
};
