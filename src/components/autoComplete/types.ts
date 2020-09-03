import { ReactElement } from 'react';

import { InputProps } from '../input';

export type DataSourceObject = {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => Array<DataSourceType> | Promise<Array<DataSourceType>>;
  onSelect?: (item: DataSourceType) => void;
  renderOptions?: (item: DataSourceType) => ReactElement;
}
