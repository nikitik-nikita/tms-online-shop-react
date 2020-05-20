import { createUseStyles } from 'react-jss';

import globalStyles from 'styles/global';

const rootStyles = {
  '@global': {
    ...globalStyles,
  },
};

export default createUseStyles(rootStyles, { name: 'Root', index: 100 });
