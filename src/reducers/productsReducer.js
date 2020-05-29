import { handleActions } from 'redux-actions';

// Actions
import {
  addProducts, sortAscProducts, sortDescProducts, searchProducts,
} from 'actions';

// Constants
import { productsState } from 'constants/defaultState';

// helpers
import sortDesc from 'helpers/sortDesc';
import sortAsc from 'helpers/sortAsc';
import sortState from 'helpers/sortState';

export default {
  products: handleActions({
    [addProducts]: (state, { payload = [] }) => ({ origin: payload, current: payload, sortDirection: 'Desc' }),
    [sortAscProducts]: (state) => {
      const newState = [...state.current];

      newState.sortDirection = 'Desc';
      sortDesc(newState);

      return { ...state, current: newState, sortDirection: newState.sortDirection };
    },
    [sortDescProducts]: (state) => {
      const newState = [...state.current];

      newState.sortDirection = 'Asc';
      sortAsc(newState);

      return { ...state, current: newState, sortDirection: newState.sortDirection };
    },
    [searchProducts]: (state, { payload = '' }) => {
      const reg = new RegExp(payload.searchString, 'i');
      const newState = state.origin.filter((product) => reg.test(product.title));
      sortState(newState, state.sortDirection);

      return { ...state, current: newState };
    },
  }, productsState),
};
