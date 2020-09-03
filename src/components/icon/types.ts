import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export const iconColorThemeList = ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'];

export type IconProps = {
  color?: string;
} & FontAwesomeIconProps;
