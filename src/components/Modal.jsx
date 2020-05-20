import React from 'react';

import { func, any } from 'prop-types';

// HOCs
import withDisplay from 'HOCs/withDisplay';

// Styles (hooks)
import useStyles from 'styles/components/Modal';

const Modal = ({ children, onClose }) => {
  const classes = useStyles();

  return (
    <>
      <div onClick={onClose} tabIndex={0} onKeyPress={onClose} role="menuitem" className={classes.Modal__background}>
        <div className={classes.Modal__root}>
          {children}
        </div>
      </div>
    </>
  );
};

Modal.displayName = 'Modal';

Modal.propTypes = {
  onClose: func.isRequired,
  children: any.isRequired,
};

export default withDisplay(Modal);
