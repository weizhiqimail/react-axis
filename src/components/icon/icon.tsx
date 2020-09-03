import React, { FC } from 'react';
import classNames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { iconColorThemeList, IconProps } from './types';

library.add(fas);

const Icon: FC<IconProps> = (props) => {
  const { className, color, ...restProps } = props;

  let names = classNames(className);
  if (iconColorThemeList.includes(color as string)) {
    names = classNames({
      [`icon-${color}`]: color,
    });
  }

  return <FontAwesomeIcon style={{ color }} className={names} {...restProps} />;
};

export default Icon;
