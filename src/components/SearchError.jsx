import React from 'react';
import Alert from '@material-ui/lab/Alert';

const SearchError = () => (
  <Alert variant="outlined" severity="warning" style={{ border: '3px solid #ffffff', color: '#000000' }}>
    No result for your request!
  </Alert>
);

export default SearchError;
