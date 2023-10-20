import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppBookList } from './AppBookList';
import { BookListProvider } from './booklist/context/BookList';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BookListProvider>
      <AppBookList />
    </BookListProvider>
  </React.StrictMode>
);
