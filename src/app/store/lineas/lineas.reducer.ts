import * as lineas from './lineas.actions';
import {Linea} from '../../models/linea';
import * as _ from 'lodash';


export interface State {
  loading: boolean;
  entities: Linea[];
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: undefined,
  result: []
}

export function reducer(state = initialState, action: lineas.Actions): State {
  switch (action.type) {
    case lineas.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case lineas.LOAD_SUCCESS: {

      return {
        ...state,
        entities: action.payload,
        loading: false,
      };
    }

     case lineas.LOAD_FAIL: {

      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
export const getEntities = (state: State) => _.values(state.entities);
