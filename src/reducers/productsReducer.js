import { handleActions } from 'redux-actions';

// Actions
import { addProducts } from 'actions';

// Constants
import { productsState } from 'constants/defaultState';

export default {
  products: handleActions({
    [addProducts]: (state, { payload = [] }) => payload,
  }, productsState),
};
