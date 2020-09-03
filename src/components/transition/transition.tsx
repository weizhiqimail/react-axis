import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import { TransitionProps } from './types';

const Transition: FC<TransitionProps> = (props) => {
  const { classNames, children, animation, wrapper, ...restProps } = props;
  return (
    <CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

export default Transition;
