import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainBodyHeader from './MainBodyHeader';
import Products from './Products';

import '../styles/components/MainBody.css';

import { products } from '../constants/defaultData';


export default class MainBody extends Component {
  render() {
    return (
      <div className="container MainBody">
        <MainBodyHeader />
        <Products products={products} {...this.props} />
      </div>
    );
  }
}

MainBody.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
};
