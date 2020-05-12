import React from 'react';

import { Link } from 'react-router-dom';

// Styles
import 'styles/components/Logo.css';

const Logo = () => (
  <Link className="logo" to="/"><span>The best shop</span></Link>
);

Logo.displayName = 'Logo';

export default Logo;
