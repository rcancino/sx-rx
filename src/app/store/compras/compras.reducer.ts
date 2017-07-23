import * as compras from './compras.actions';

import * as _ from 'lodash';
import {Compra} from '../../models/compra';

export interface State {
  loading: boolean;
  pendientes: { [id: string]: Compra };
  result: string[];
  infoCompra: Compra;
}

export const initialState: State = {
  loading: false,
  pendientes: {},
  result: [],
  infoCompra: undefined
}

export function reducer(state = initialState, action: compras.Actions): State {
  switch (action.type) {
    case compras.LOAD_SUCCESS: {

      return {
        ...state,
        pendientes: _.keyBy(action.payload, 'id'),
        loading: false,
      };
    }

     case compras.LOAD_FAIL: {

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

export const getPendientes = (state: State) => _.values(state.pendientes);
