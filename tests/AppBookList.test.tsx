import React from 'react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BookListProvider } from '../src/booklist/context/BookList';
import { ListReadingProvider } from '../src/booklist/context/ListReading';
import { AppBookList } from '../src/AppBookList';
import { library } from '../src/booklist/data/books.json';

enum Genre {
  ZOMBIES = 'Zombies',
  TERROR = 'Terror'
}

describe('<AppBookList/>', () => {
  test('should add items and remove them', async () => {
    const user = userEvent.setup();
    const { getByText } = render(
      <BookListProvider>
        <ListReadingProvider>
          <AppBookList />
        </ListReadingProvider>
      </BookListProvider>
    );
    const listAvailable = screen.getByTestId('available-books');
    expect(listAvailable).toBeDefined();
    expect(listAvailable.childNodes.length).toBe(12);

    const firstChildListAvailable = listAvailable.querySelectorAll('li')[0];
    expect(firstChildListAvailable).toBeDefined();

    const secondChildListAvailable = listAvailable.querySelectorAll('li')[1];
    expect(secondChildListAvailable).toBeDefined();

    const nameFirstChild = firstChildListAvailable.querySelector('img')!.alt;
    expect(nameFirstChild.length > 0).toBeTruthy();
    const nameSecondChild = secondChildListAvailable.querySelector('img')!.alt;
    expect(nameSecondChild.length > 0).toBeTruthy();

    const firstAddButton = firstChildListAvailable.querySelector('button');
    const secondAddButton = secondChildListAvailable.querySelector('button');

    expect(firstAddButton).toBeDefined();
    expect(secondAddButton).toBeDefined();

    expect(getByText('lista vacía'));
    await user.click(firstAddButton!);
    await user.click(secondAddButton!);

    const listReading = screen.getByTestId('reading-books');
    expect(listReading).toBeDefined();
    expect(listReading.childNodes.length).toBe(2);
    expect(getByText('libros en la lista de lectura 2'));

    const firstListReading = listReading.querySelectorAll('li')[0];
    const secondListReading = listReading.querySelectorAll('li')[1];

    const firstNameList = firstListReading.querySelector('img')!.alt;
    const secondNameList = secondListReading.querySelector('img')!.alt;
    expect(firstNameList).toEqual(nameFirstChild);
    expect(secondNameList).toEqual(nameSecondChild);

    const removeButton = firstListReading.querySelector('button');
    await user.click(removeButton!);
    expect(listReading.childNodes.length).toBe(1);
    expect(getByText('libros en la lista de lectura 1'));
    await user.click(secondAddButton!);
    expect(getByText('lista vacía'));
  });

  test('should filter the items by genrer', async () => {
    const user = userEvent.setup();
    const { getByRole, getByTestId } = render(
      <BookListProvider>
        <ListReadingProvider>
          <AppBookList />
        </ListReadingProvider>
      </BookListProvider>
    );
    const select = getByRole('combobox');
    expect(select).toBeDefined();
    await user.selectOptions(select, [Genre.TERROR]);

    const option = getByRole('option', {
      name: Genre.TERROR
    }) as HTMLOptionElement;
    expect(option.selected).toBe(true);

    const pages = getByTestId('pages');
    expect(pages.textContent).toBeDefined();
    const quantityPages = Number(pages.textContent!.split(':')[1]);

    const quantity = library.filter(
      (item) =>
        item.book.genre === Genre.TERROR && item.book.pages > quantityPages
    );
    const listAvailable = screen.getByTestId('available-books');
    expect(listAvailable).toBeDefined();

    expect(listAvailable.childNodes.length === quantity.length).toBeTruthy();
  });
  test('should filter the items by pages', async () => {
    const { getByRole, getByTestId } = render(
      <BookListProvider>
        <ListReadingProvider>
          <AppBookList />
        </ListReadingProvider>
      </BookListProvider>
    );
    const input = getByRole('slider') as HTMLInputElement;
    expect(input).toBeDefined();

    const pages = getByTestId('pages');
    expect(pages.textContent).toBeDefined();
    const quantityPages = pages.textContent!.split(':')[1];
    expect(input.value).toBe(quantityPages);

    const listAvailable = getByTestId('available-books');
    expect(listAvailable).toBeDefined();
    expect(listAvailable.childNodes.length).toBe(12);
    const value = 400;
    fireEvent.change(input, { target: { value: 400 } });
    const quantityBooks = library.filter((item) => item.book.pages > value);
    expect(
      listAvailable.childNodes.length === quantityBooks.length
    ).toBeTruthy();
  });
});
