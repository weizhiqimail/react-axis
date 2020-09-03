import React, { FC } from 'react';
import classNames from 'classnames';

import { ButtonProps } from './types';

const Button: FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href, ...restProps } = props;

  const names = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a {...restProps} href={href} className={names}>
        {children}
      </a>
    );
  }

  return (
    <button {...restProps} className={names} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  btnType: 'default',
  disabled: false,
};

export default Button;
