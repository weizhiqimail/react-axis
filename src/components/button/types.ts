import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

export type ButtonSize = 'lg' | 'sm';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export interface BaseButtonProps {
  className?: string;
  /** 设置 Button 禁用 */
  disabled?: boolean;
  /** 设置 Button 加载中 */
  loading?: boolean;
  /** 设置 Button 尺寸 */
  size?: ButtonSize;
  /** 设置 Button 类型 */
  btnType?: ButtonType;
  /** 设置 Button href 链接 */
  href?: string;
  /** 子元素 */
  children?: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
