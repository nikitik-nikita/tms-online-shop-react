import {
  put, call, all, takeLatest, select, delay,
} from 'redux-saga/effects';

// Actions
import {
  startLoader,
  addProducts,
  endLoader,
  getData,
} from 'actions';

// Constants
import { productUrl, rateUrl } from 'constants/urls';

// helpers
import { serverGet } from 'helpers/requests';
import sortDesc from 'helpers/sortDesc';

export function* getDataSaga() {
  try {
    const currentProducts = yield select((state) => state.products.current);

    if (!currentProducts.length) {
      yield put(startLoader());
      yield delay(2000);

      const [products, rate] = yield all([
        call(serverGet, productUrl),
        call(serverGet, rateUrl),
      ]);

      const updatedProducts = products.map((product) => {
        product.price.value += rate.Cur_OfficialRate;
        product.price.currency = 'BYN';

        return product;
      });

      yield put(addProducts(sortDesc(updatedProducts)));
      yield put(endLoader());
    }
  } catch (err) {
    console.error(err.message);
    yield put(endLoader());
  }
}

export default function* products() {
  yield all([
    takeLatest(getData.toString(), getDataSaga),
  ]);
}
