export interface DataBooks {
  book: {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: {
      name: string;
      otherBooks: string[];
    };
  };
  isReadingList?: boolean;
}

export interface ContextProps {
  children: JSX.Element[] | JSX.Element;
}

export interface State {
  stateInit: DataBooks[];
  filter: {
    genre: string;
    pages: number;
    maxPage: number;
    minPage: number;
  };
  allGenres: string[];
}

export type typeStateFilter = Pick<State['filter']>;

export type Action =
  | { type: 'FILTER_BY_GENRE'; payload: string }
  | { type: 'FILTER_BY_PAGES'; payload: string };
