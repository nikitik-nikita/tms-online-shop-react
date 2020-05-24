import React from 'react';

import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';

import { func } from 'prop-types';

// Actions
import { sortAscProducts, sortDescProducts } from 'actions';

// Styles (hooks)
import useStyles from 'styles/components/MainBodyHeader';


const MainBodyHeader = (props) => {
  const classes = useStyles();
  const sortDirection = useSelector((state) => state.products.sortDirection);
  console.log(sortDirection);

  const handleClick = (event) => {
    event.preventDefault();
    if (sortDirection === 'Desc') {
      props.sortDescProducts();
    } else if (sortDirection === 'Asc') {
      props.sortAscProducts();
    }
  };

  return (
    <div className={`wrap ${classes.Sort__wrap}`}>
      <p className={classes.Sort__value}>Electronics</p>
      <p className={classes.Sort__value}>
        Sort by price:
        <a
          href="#"
          onClick={handleClick}
        >
          {sortDirection}
        </a>
      </p>
    </div>
  );
};

const mapDispatchToProps = {
  sortAscProducts,
  sortDescProducts,
};

MainBodyHeader.displayName = 'MainBodyHeader';

MainBodyHeader.propTypes = {
  sortDescProducts: func.isRequired,
  sortAscProducts: func.isRequired,
};

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
)(MainBodyHeader);
