export interface IMenuItem {
  title: string;
  children: Array<IRouteItem>;
}

export interface IRouteItem {
  title: string;
  titleEn: string;
  to: string;
  exact: boolean;
  component: any;
}
