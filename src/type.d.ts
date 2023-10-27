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

export enum Types {
  FILTER_BY_GENRE = 'FILTER_BY_GENRE',
  FILTER_BY_PAGES = 'FILTER_BY_PAGES'
}

export type Action =
  | { type: Types.FILTER_BY_GENRE; payload: string }
  | { type: Types.FILTER_BY_PAGES; payload: string };
