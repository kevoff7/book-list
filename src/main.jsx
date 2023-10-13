import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppBookList } from './AppBookList.jsx';
import './index.css';
import { BookListProvider } from './booklist/context/BookList.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookListProvider>
      <AppBookList />
    </BookListProvider>
  </React.StrictMode>,
);
