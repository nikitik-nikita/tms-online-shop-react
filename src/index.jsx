import React from 'react';
import ReactDOM from 'react-dom';

// HOCs
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';

// Components
import { Provider } from 'react-redux';
import App from 'containers/App';

ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>),
document.getElementById('root'));
