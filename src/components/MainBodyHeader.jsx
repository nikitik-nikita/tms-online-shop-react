import React from 'react';

// Styles
import 'styles/components/MainBodyHeader.css';

const MainBodyHeader = () => (
  <div className="wrap Sort__wrap">
    <p className="Sort__value">Electronics</p>
    <p className="Sort__value">
      Sort by price:
      <a href=" " id="Sort__value--change">Desc</a>
    </p>
  </div>
);

MainBodyHeader.displayName = 'MainBodyHeader';

export default MainBodyHeader;
