import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { connect, useSelector } from 'react-redux';
import { switchTheme } from 'actions';
import { func } from 'prop-types';

const ThemeSwitcher = ({ switchTheme }) => {
  const isChecked = useSelector((state) => state.app.checked);
  const handleChange = () => {
    switchTheme();
  };

  return (
    <FormControlLabel
      control={<Switch checked={isChecked} onChange={handleChange} />}
      label="Switch Theme"
    />
  );
};

const mapDispatchToProps = {
  switchTheme,
};

ThemeSwitcher.displayName = 'ThemeSwitcher';

ThemeSwitcher.propTypes = {
  switchTheme: func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(ThemeSwitcher);
