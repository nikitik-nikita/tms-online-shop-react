import { createUseStyles } from 'react-jss';

const ModalStyles = {
  Modal__background: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  Modal__root: {
    backgroundColor: '#ffffff',
    padding: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    color: '#000000',
  },
};

export default createUseStyles(ModalStyles, { name: 'Modal', index: 307 });
