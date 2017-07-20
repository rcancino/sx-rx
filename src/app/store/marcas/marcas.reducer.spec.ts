import { reducer } from './marcas.reducer';
import * as fromMarcas from './marcas.reducer';

describe('MarcasReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromMarcas.initialState);
    });
  });

});