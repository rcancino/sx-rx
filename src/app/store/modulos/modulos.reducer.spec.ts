import { reducer } from './modulos.reducer';
import * as fromModulo from './modulos.reducer';

describe('ModuloReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromModulo.initialState);
    });
  });

});
