import * as cliente from '../actions/clientes.actions';
import {Cliente} from '../models/cliente';

export interface State {
  loading: boolean;
  entities: Cliente[],
  result: string[];
  selected: any;
}

export const initialState: State = {
  loading: false,
  entities: [],
  result: [],
  selected: undefined
}

export function reducer(state = initialState, action: cliente.Actions): State {
  switch (action.type) {
    case cliente.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case cliente.LOAD_SUCCESS: {

      return {
        ...state,
        entities: action.payload,
        loading: false,
      };
    }

     case cliente.LOAD_FAIL: {

      return {
        ...state,
        loading: false,
      };
    }

    case cliente.SELECT_SUCCESS: {
      return {
        ...state,
        loading: false,
        selected: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.entities;
export const getLoading = (state: State) => state.loading;
export const getSelected = (state: State) => state.selected;
