import * as productos from './productos.actions';

import * as _ from 'lodash';
import {Producto} from '../../models/producto';
import {Observable} from 'rxjs/Observable';

export interface State {
  loading: boolean;
  entities: { [id: string]: Producto };
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: {},
  result: []
}

export function reducer(state = initialState, action: productos.Actions): State {
  switch (action.type) {
    case productos.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case productos.LOAD_SUCCESS: {

      return {
        ...state,
        entities: _.keyBy(action.payload, 'id'),
        loading: false,
      };
    }

     case productos.LOAD_FAIL: {

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
export const getEntities = (state: State) => _.values<Producto>(state.entities)

