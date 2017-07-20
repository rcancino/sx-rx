import * as clases from './clases.actions';
import * as _ from 'lodash';

import { Clase } from '../../models/clase';

export interface State {
  loading: boolean;
  entities: { [id: string]: Clase };
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: {},
  result: []
}

export function reducer(state = initialState, action: clases.Actions): State {
  switch (action.type) {
    case clases.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case clases.LOAD_SUCCESS: {

      return {
        ...state,
        loading: false,
        entities: _.keyBy(action.payload, 'id')
      };
    }

     case clases.LOAD_FAIL: {

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

export const getEntities = (state: State) => _.values(state.entities)
