import React from 'react';

import { func, any } from 'prop-types';

// HOCs
import withDisplay from 'HOCs/withDisplay';

// Styles (hooks)
import useStyles from 'styles/components/Modal';

const Modal = ({ children, onClick }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.Modal__background}>
        <div className={classes.Modal__root}>
          <span onClick={onClick} className={classes.Modal__close}>Close</span>
          {children}
        </div>
      </div>
    </>
  );
};

Modal.displayName = 'Modal';

Modal.propTypes = {
  onClick: func.isRequired,
  children: any.isRequired,
};

export default withDisplay(Modal);
