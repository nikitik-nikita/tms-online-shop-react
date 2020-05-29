import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Products from 'containers/Products';
import OnlyProduct from 'containers/OnlyProduct';
import MainBodyHeader from './MainBodyHeader';

const MainBody = () => (
  <div className="container">
    <MainBodyHeader />
    <Switch>
      <Route path="/" exact>
        <Products />
      </Route>
      <Route path="/product/:id">
        <OnlyProduct />
      </Route>
    </Switch>
  </div>
);

MainBody.displayName = 'MainBody';

export default MainBody;
