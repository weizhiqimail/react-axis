import React from 'react';

import { Omit, tuple } from '../_utils/types';
import { SizeType } from '../config-provider/size-context';
import ButtonGroup from './button-group';

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link');

export type ButtonType = typeof ButtonTypes[number];

const ButtonShapes = tuple('circle', 'circle-outline', 'round');

export type ButtonShape = typeof ButtonShapes[number];

const ButtonHTMLTypes = tuple('submit', 'button', 'reset');

export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  loading?: boolean | { delay: number };
  prefixCls?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps | NativeButtonProps>;

export interface CompoundComponent
  extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {
  Group: typeof ButtonGroup;
  __AXIS_BUTTON: boolean;
}

export interface ButtonGroupProps {
  size?: SizeType;
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
}
