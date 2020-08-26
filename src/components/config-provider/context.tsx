import React, { createContext } from 'react';
import { SizeType } from './size-context';
import { LIB_PREFIX } from '../_utils/config';

export interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  rootPrefixCls?: string;
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
  // TODO renderEmpty 不理解
  // renderEmpty: RenderEmptyHandler;
  // TODO csp 不理解
  // csp?: CSPConfig;
  autoInsertSpaceInButton?: boolean;
  input?: {
    autoComplete?: string;
  };
  pageHeader?: {
    ghost: boolean;
  };
  direction?: 'ltr' | 'rtl';
  space?: {
    size?: SizeType | number;
  };
}

export const ConfigContext = createContext<ConfigConsumerProps>({
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${LIB_PREFIX}-${suffixCls}` : LIB_PREFIX;
  },
});

export const ConfigConsumer = ConfigContext.Consumer;
