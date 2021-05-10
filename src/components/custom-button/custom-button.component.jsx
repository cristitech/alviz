import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, clickHandler, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} custom-button`}
    onClick={clickHandler}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
