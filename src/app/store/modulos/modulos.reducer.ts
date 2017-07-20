import * as modulo from './modulos.actions';
import {Modulo, MODULOS} from '../../models/modulo';

export interface State {
  current: Modulo
  entities: any
}

export const initialState: State = {
  current: MODULOS['compras'],
  entities: MODULOS
}

export function reducer(state = initialState, action: modulo.Actions): State {
  switch (action.type) {
    case modulo.SET_CURRENT: {
      return {
        ...state,
        current: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export const getCurrentModulo = (state: State) => state.current
