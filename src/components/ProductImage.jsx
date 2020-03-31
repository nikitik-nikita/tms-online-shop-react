import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/ProductImage.css';

const ProductImage = (props) => (
  <div className="product__img--wrap">
    <img className="product__img" alt={props.alt} src={props.src} />
  </div>
);

export default ProductImage;

ProductImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
