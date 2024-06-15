import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.styles';

const Button = ({
  children,
  className,
  disabled,
  onClick,
  size,
  variant,
  ...rest
}) => {
  const buttonClasses = classNames(
    styles.button,
    styles[`button--${size}`],
    styles[`button--${variant}`],
    className,
    {
      [styles['button--disabled']]: disabled,
    }
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

Button.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => {},
  size: 'medium',
  variant: 'primary',
};

export default Button;
