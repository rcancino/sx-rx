import { reducer } from './clases.reducer';
import * as fromClases from './clases.reducer';

describe('ClasesReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromClases.initialState);
    });
  });

});