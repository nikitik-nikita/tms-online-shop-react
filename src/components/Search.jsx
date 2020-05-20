import React from 'react';

import { connect } from 'react-redux';
import { searchProducts } from 'actions';
import { array, func } from 'prop-types';

const Search = ({ searchProducts, products }) => {
  const handleInput = (event) => {
    event.preventDefault();

    searchProducts({ products, searchString: event.target.value });
  };

  return (
    <input type="text" placeholder="Search" onChange={handleInput} />
  );
};

const mapStateToProps = (state) => ({
  products: state.products.current,
});

const mapDispatchToProps = {
  searchProducts,
};

Search.displayName = 'Search';

Search.propTypes = {
  products: array.isRequired,
  searchProducts: func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
