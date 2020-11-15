import { IMenuItem } from '../types';

import HomeExample from './home.example';
import AutoCompleteExample from './autoComplete.example';
import ButtonExample from './button.example';
import IconExample from './icon.example';
import InputExample from './input.example';
import TransitionExample from './transition.example';

const routes: Array<IMenuItem> = [
  {
    title: '通用',
    children: [
      {
        title: '首页',
        titleEn: 'home',
        to: '/',
        exact: true,
        component: HomeExample,
      },
      {
        title: '按钮',
        titleEn: 'Button',
        to: '/button',
        exact: true,
        component: ButtonExample,
      },
      {
        title: '图标',
        titleEn: 'Icon',
        to: '/icon',
        exact: true,
        component: IconExample,
      },
      {
        title: '动画',
        titleEn: 'Animation',
        to: '/animation',
        exact: true,
        component: TransitionExample,
      },
    ],
  },
  {
    title: '数据录入',
    children: [
      {
        title: '自动完成',
        titleEn: 'AutoComplete',
        to: '/autoComplete',
        exact: true,
        component: AutoCompleteExample,
      },
      {
        title: '输入框',
        titleEn: 'Input',
        to: '/input',
        exact: true,
        component: InputExample,
      },
    ],
  },
];

export default routes;
