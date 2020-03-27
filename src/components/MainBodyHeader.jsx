import React, { Component } from 'react';

import '../styles/components/MainBodyHeader.css';

export default class MainBodyHeader extends Component {
  render() {
    return (
      <div className="wrap Sort__wrap">
        <p className="Sort__value">Electronics</p>
        <p className="Sort__value">
          Sort by price:
          <a href="/" id="Sort__value--change">Desc</a>
        </p>
      </div>
    );
  }
}
