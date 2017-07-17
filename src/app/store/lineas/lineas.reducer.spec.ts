import { reducer } from './lineas.reducer';
import * as fromLineas from './lineas.reducer';

describe('LineasReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromLineas.initialState);
    });
  });

});