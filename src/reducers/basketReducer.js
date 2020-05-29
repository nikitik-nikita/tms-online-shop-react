import { handleActions } from 'redux-actions';

// Actions
import { addToBasket, removeFromBasket } from 'actions';

// Constants
import { basketState } from 'constants/defaultState';

const defaultPayLoad = { productId: '', priceValue: 0, priceCurrency: '' };

export default {
  basket: handleActions({
    [addToBasket]: (state, { payload = defaultPayLoad }) => {
      const newState = { ...state, productIds: [...state.productIds] };

      newState.productIds.push(payload.productId);
      newState.count += 1;
      newState.amount += payload.priceValue;
      newState.currency = payload.priceCurrency;

      return newState;
    },
    [removeFromBasket]: (state, { payload = defaultPayLoad }) => {
      const newState = { ...state, productIds: [...state.productIds] };

      newState.productIds = newState.productIds.filter((productId) => productId !== payload.productId);
      newState.count -= 1;
      newState.amount -= payload.priceValue;

      return newState;
    },
  }, basketState),
};
