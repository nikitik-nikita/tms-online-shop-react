import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import basketReducer from 'reducers/basketReducer';
import loadReducer from 'reducers/loadReducer';
import productsReducer from 'reducers/productsReducer';
import appReducer from './appReducer';

const reducers = persistReducer({
  key: 'root',
  storage,
  whitelist: [
    'basket',
    'products',
    'app',
  ],
},
combineReducers({
  ...basketReducer,
  ...loadReducer,
  ...productsReducer,
  ...appReducer,
}));

export default reducers;
