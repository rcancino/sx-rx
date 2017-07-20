import { reducer } from './layout.reducer';
import * as fromLayout from './layout.reducer';

describe('LayoutReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromLayout.initialState);
    });
  });

});