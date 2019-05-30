import reducer from './characterDetailReducer';
import { FETCH_CHARACTER } from '../actions/charactersActions';

describe('Character Detail Reducer', () => {
  it('handles the fetch character action', () => {
    const initialState = {
      loading: true,
      character: {},
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTER,
      payload: { name: 'hello there' }
    });

    expect(newState).toEqual({
      loading: false,
      character: { name: 'hello there' },
      error: null
    });
  });
});
