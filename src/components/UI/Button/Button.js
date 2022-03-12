import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { children, className, type } = props;
  return <button className={`button ${className} ${type}`}>{children}</button>;
};

export default Button;