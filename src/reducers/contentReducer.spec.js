import reducer from './contentReducer';
import initialState from './initialState';

describe('Content Reducer', () => {
  it('defaults to initial state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });
});
