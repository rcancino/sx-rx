import * as proveedores from './proveedores.actions';
import {Proveedor} from '../../models/proveedor';
import * as _ from 'lodash';

export interface State {
  loading: boolean;
  entities: { [id: string]: Proveedor };
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: {},
  result: []
}

export function reducer(state = initialState, action: proveedores.Actions): State {
  switch (action.type) {
    case proveedores.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case proveedores.LOAD_SUCCESS: {

      return {
        ...state,
        entities: _.keyBy(action.payload, 'id'),
        loading: false,
      };
    }

     case proveedores.LOAD_FAIL: {

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

export const getEntities = (state: State) => _.values(state.entities);
