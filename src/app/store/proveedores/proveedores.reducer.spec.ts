import { reducer } from './proveedores.reducer';
import * as fromProveedores from './proveedores.reducer';

describe('ProveedoresReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromProveedores.initialState);
    });
  });

});