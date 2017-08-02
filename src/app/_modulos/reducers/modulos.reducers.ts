import * as modulo from '../actions/modulos.actions';
import { Modulo } from '../models/modulo';
import { MODULOS } from '../models/modulos';

export interface State {
  modulos: Modulo[];
  selected: Modulo | null;
}

export const initialState: State = {
  modulos: MODULOS,
  selected: null,
};

export function reducer(state = initialState, action: modulo.Actions): State {
  switch (action.type) {
    case modulo.SELECT: {
      return {
        ...state,
        selected: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getModulos = (state: State) => state.modulos;

export const getCurrentModulo = (state: State) => state.selected;
