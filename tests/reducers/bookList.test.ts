import { reducer } from '../../src/booklist/reducers/bookList';
import { describe, expect, test } from 'vitest';
import { initialState } from '../fixtures/bookFixture';
import { Types } from '../../src/type.d';

describe('Test in reducer', () => {
  test('should return the default state', () => {
    const values = reducer(initialState, {} as any);
    expect(values).toEqual(initialState);
  });
  test('should filter books by genre', () => {
    const action = {
      type: Types.FILTER_BY_GENRE,
      payload: 'Zombies'
    };
    const values = reducer(initialState, action);
    const newF = {
      ...initialState,
      filter: { ...initialState.filter, genre: 'Zombies' }
    };
    expect(values).toEqual(newF);
  });
  test('should filter books by pages', () => {
    const pages = 435;
    const action = {
      type: Types.FILTER_BY_PAGES,
      payload: String(pages)
    };
    const values = reducer(initialState, action);
    const newF = {
      ...initialState,
      filter: { ...initialState.filter, pages }
    };
    console.log(newF);
    expect(values).toEqual(newF);
  });
});
