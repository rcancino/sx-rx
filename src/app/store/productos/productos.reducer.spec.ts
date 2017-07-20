import { reducer } from './productos.reducer';
import * as fromProductos from './productos.reducer';

describe('ProductosReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromProductos.initialState);
    });
  });

});