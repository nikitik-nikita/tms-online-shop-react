import React from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { array } from 'prop-types';

// HOCs
import { connect } from 'react-redux';

// Components
import ProductImage from 'components/ProductImage';
import Button from 'components/Button';

// Styles
import 'styles/containers/Products.css';

const Products = ({ products }) => (
  <div className="Products__table">
    {products.map((product) => (
      <div className="Products__table--information" key={product.id}>
        <div className="wrap product__wrap">
          <div className="product__cell">
            <Link to={`/product/${product.id}`}>
              <ProductImage
                src={product.imageLink}
                alt={product.title}
                product={product}
              />
            </Link>
            <div className="product__text">
              <Link to={`/product/${product.id}`}>
                <p className="product__text--title">{product.title}</p>
              </Link>
              <p
                className="product__text--description"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>
          <div className="product__cost">
            <p className="product__cost--info">
              {(product.price.currency)}
              {' '}
              {(product.price.value).toLocaleString('en-En')}
            </p>
            <Button product={product} />
          </div>
        </div>
      </div>
    ))}
  </div>
);


const mapStateToProps = (state) => ({
  products: state.products,
});

Products.displayName = 'Products';

Products.propTypes = {
  products: array.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(Products);
