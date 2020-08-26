import React, { createRef, forwardRef, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

import SizeContext from '../config-provider/size-context';
import { AnchorButtonProps, ButtonProps, CompoundComponent, NativeButtonProps } from './types';
import { ConfigContext } from '../config-provider/context';
import ButtonGroup from './button-group';

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const size = useContext(SizeContext);
  const [loading, setLoading] = useState(props.loading);
  const buttonRef = (ref as any) || createRef<HTMLElement>();
  const { getPrefixCls, autoInsertSpaceInButton, direction } = useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    type,
    danger,
    shape,
    size: customizeSize,
    className,
    children,
    icon,
    ghost,
    block,
    ...rest
  } = props;
  let delayTimeout: number;

  useEffect(() => {
    if (props.loading && typeof props.loading !== 'boolean') {
      clearTimeout(delayTimeout);
      if (props.loading.delay) {
        delayTimeout = window.setTimeout(() => {
          setLoading(props.loading);
        }, props.loading.delay);
      } else if (props.loading !== loading) {
        setLoading(props.loading);
      }
    }
  }, [props.loading]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    if (loading) {
      return;
    }
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  };

  const prefixCls = getPrefixCls('btn', customizePrefixCls);
  // const autoInsertSpace = autoInsertSpaceInButton !== false;

  let sizeCls = '';
  switch (customizeSize || size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-${loading}`]: loading,
    [`${prefixCls}-${block}`]: block,
    [`${prefixCls}-${danger}`]: danger,
    [`${prefixCls}-rtl`]: direction === 'rtl',
  });

  // TODO htmlType 报错
  const linkButtonRestProps = omit(rest as AnchorButtonProps, ['loading']);
  if (linkButtonRestProps.href !== undefined) {
    return (
      <a {...linkButtonRestProps} className={classes} onClick={handleClick} ref={buttonRef}>
        {children}
      </a>
    );
  }

  const { htmlType, ...otherRest } = rest as NativeButtonProps;

  const buttonNode = (
    <button
      {...(omit(otherRest, ['loading']) as NativeButtonProps)}
      type={htmlType}
      className={classes}
      onClick={handleClick}
      ref={buttonRef}
    >
      {children}
    </button>
  );

  return buttonNode;
};

const Button = forwardRef<unknown, ButtonProps>(InternalButton) as CompoundComponent;

Button.displayName = 'Button';

Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false,
  // TODO htmlType 报错
  // htmlType: 'button' as ButtonProps['htmlType'],
};

Button.Group = ButtonGroup;
Button.__AXIS_BUTTON = true;

export default Button;
