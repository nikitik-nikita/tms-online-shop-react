import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/Products.css';

import ProductImage from './ProductImage';
import Button from './Button';

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.handleBasket = this.handleBasket.bind(this);
  }

  handleBasket(product) {
    return (active) => {
      if (active) {
        this.props.addToBasket(product);
      } else {
        this.props.removeFromBasket(product);
      }
    };
  }

  render() {
    return (
      <div className="Products__table">
        {this.props.products.map((product) => (
          <div className="Products__table--information" key={product.id}>
            <div className="wrap product__wrap">
              <div className="product__cell">
                <ProductImage src={product.imageLink} alt={product.title} />
                <div className="product__text">
                  <p className="product__text--title">{product.title}</p>
                  <p
                    className="product__text--description"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              </div>
              <div className="product__cost">
                <p className="product__cost--info">
                  {product.price.currency}
                  {' '}
                  {product.price.value}
                </p>
                <Button onClick={this.handleBasket(product)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};
