import * as cliente from '../actions/clientes.actions';

export interface State {
  loading: boolean;
  filter: {}
}

const initialState: State = {
  loading: false,
  filter: {
    max: 100
  }
};

export function reducer(state = initialState, action: cliente.Actions): State {
  switch (action.type) {
    case cliente.SEARCH: {
      const filter = action.payload;

      if (filter) {
        return {
          loading: false,
          filter
        };
      }

      return Object.assign({}, state, {
        filter,
        loading: true,
      });
    }

    case cliente.SEARCH_COMPLETE: {
      const books = action.payload;
      return {
        loading: false,
        filter: state.filter,
      };
    }

    default: {
      return state;
    }
  }
}

export const getFilter = (state: State) => state.filter;

export const getLoading = (state: State) => state.loading;
