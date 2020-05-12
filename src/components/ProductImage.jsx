import React from 'react';

import { string } from 'prop-types';

// Styles
import 'styles/components/ProductImage.css';

const ProductImage = (props) => (
  <div className="product__img--wrap">
    <img className="product__img" alt={props.alt} src={props.src} />
  </div>
);

ProductImage.displayName = 'ProductImage';

ProductImage.propTypes = {
  alt: string,
  src: string,
};

export default ProductImage;
