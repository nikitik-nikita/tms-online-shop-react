import React from 'react';

import { func, any } from 'prop-types';

// HOCs
import withDisplay from 'HOCs/withDisplay';

// Styles
import 'styles/components/Modal.css';

const Modal = ({ children, onClose }) => (
  <>
    <div onClick={onClose} tabIndex={0} onKeyPress={onClose} role="menuitem" className="Modal-background">
      <div className="Modal-root">
        {children}
      </div>
    </div>
  </>
);

Modal.displayName = 'Modal';

Modal.propTypes = {
  onClose: func.isRequired,
  children: any.isRequired,
};

export default withDisplay(Modal);
