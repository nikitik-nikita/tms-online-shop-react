import { handleActions } from 'redux-actions';

// Actions
import {
  addProducts, sortAscProducts, sortDescProducts, searchProducts,
} from 'actions';

// Constants
import { productsState } from 'constants/defaultState';


export default {
  products: handleActions({
    [addProducts]: (state, { payload = [] }) => ({ origin: payload, current: payload, sortDirection: 'Desc' }),
    [sortAscProducts]: (state) => {
      const newState = [...state.current];

      newState.sortDirection = 'Desc';
      newState.sort((a, b) => a.price.value - b.price.value);

      return { ...state, current: newState, sortDirection: newState.sortDirection };
    },
    [sortDescProducts]: (state) => {
      const newState = [...state.current];

      newState.sortDirection = 'Asc';
      newState.sort((a, b) => b.price.value - a.price.value);

      return { ...state, current: newState, sortDirection: newState.sortDirection };
    },
    [searchProducts]: (state, { payload = '' }) => {
      const reg = new RegExp(payload.searchString, 'i');

      return { ...state, current: state.origin.filter((product) => reg.test(product.title)) };
    },
  }, productsState),
};
