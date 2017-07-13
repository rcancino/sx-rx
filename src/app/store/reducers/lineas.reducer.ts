import * as lineas from '../actions/lineas.actions';

export interface State {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: {},
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