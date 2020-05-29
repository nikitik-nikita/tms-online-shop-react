import { createActions } from 'redux-actions';

export const {
  addProducts,
  getData,
  sortAscProducts,
  sortDescProducts,
  searchProducts,
} = createActions(
  'ADD_PRODUCTS',
  'GET_DATA',
  'SORT_ASC_PRODUCTS',
  'SORT_DESC_PRODUCTS',
  'SEARCH_PRODUCTS',
);
