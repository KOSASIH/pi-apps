import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.styles';

const Label = ({ children, htmlFor }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
