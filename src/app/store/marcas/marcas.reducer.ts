import * as marcas from './marcas.actions';
import {Marca} from '../../models/marca';


export interface State {
  loading: boolean;
  entities: Marca[];
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: [],
  result: []
}

export function reducer(state = initialState, action: marcas.Actions): State {
  switch (action.type) {
    case marcas.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case marcas.LOAD_SUCCESS: {

      return {
        ...state,
        entities: action.payload,
        loading: false,
      };
    }

     case marcas.LOAD_FAIL: {

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

export const getEntities = (state: State) => state.entities;
