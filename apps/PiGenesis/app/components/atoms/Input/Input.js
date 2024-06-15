import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.styles';

const Input = ({
  className,
  disabled,
  error,
  label,
  onChange,
  placeholder,
  type,
  value,
}) => {
  const inputClasses = classNames(
    styles.input,
    className,
    {
      [styles['input--disabled']]: disabled,
      [styles['input--error']]: error,
    }
  );

  return (
    <div className={styles.inputWrapper}>
      {label && <Label htmlFor={label}>{label}</Label>}
      <input
        className={inputClasses}
        disabled={disabled}
        id={label}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  value: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  label: '',
  onChange: () => {},
  placeholder: '',
  type: 'text',
  value: '',
};

export default Input;
