import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { useParams } from 'react-router';
import { array, object } from 'prop-types';

// HOCs
import { connect } from 'react-redux';

// Styles
import 'styles/containers/Products.css';

// Components
import ProductImage from 'components/ProductImage';
import Button from 'components/Button';

const OnlyProduct = ({ products, ...props }) => {
  const [product = {}, setProduct] = useState({ price: {} });

  const params = useParams();

  useEffect(() => {
    const { id } = params;

    if (products.length && id) {
      const stateProduct = products.find((item) => item.id === id);

      setProduct(stateProduct);
    } else if (props.product) {
      setProduct(props.product);
    }
  }, []);


  const { value: priceValue = 0, currency: priceCurrency } = product.price;
  return (
    <div className="Products__table">
      <div className="Products__table--information">
        <div className="wrap product__wrap">
          <div className="product__cell">
            <ProductImage src={product.imageLink} alt={product.title} product={product} />
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
              {(priceCurrency)}
              {' '}
              {(priceValue).toLocaleString('en-En')}
            </p>
            <Button product={product} {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

OnlyProduct.displayName = 'OnlyProduct';

OnlyProduct.propTypes = {
  product: object,
  products: array.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(OnlyProduct);
