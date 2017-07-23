import { reducer } from './compras.reducer';
import * as fromCompras from './compras.reducer';

describe('ComprasReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromCompras.initialState);
    });
  });

});