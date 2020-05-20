const globalStyles = {
  '*': {
    margin: 0,
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  body: {
    overflow: 'auto',
    background: '#d8d8d8',
  },
  a: {
    color: '#252525',
    textDecoration: 'none',
  },
  input: {
    width: '400px',
    height: '25px',
    borderStyle: 'none',
    borderRadius: '3px',
    fontSize: '12px',
    paddingLeft: '5px',
  },
  '.container': {
    maxWidth: '901px',
    margin: '0 auto',
    width: '100%',
  },
  '.wrap': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 600,
    padding: '15px',
  },
};

export default globalStyles;
