import React from 'react';

// HOCs
import withDisplay from 'HOCs/withDisplay';

// Styles
import 'styles/components/Loader.css';

const Loader = () => (
  <>
    <div className="Loader">
      <div className="loader-child">
        <div className="icecream">
          <div className="flavor">
            <div className="flavours" />
          </div>
          <div className="stick" />
        </div>
      </div>
    </div>
  </>
);

Loader.displayName = 'Loader';

export default withDisplay(Loader);
