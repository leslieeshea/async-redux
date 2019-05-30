import { fetchCharacters, FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS } from './charactersActions';

jest.mock('../services/avatarApi.js', () => ({
  getCharacters: () => Promise.resolve([])
}));

describe('Characters actions', () => {
  it('it dispatches a loading action and a fetch characters action', () => {
    const thunk = fetchCharacters();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS,
          payload: []
        });
      });
  });
});
