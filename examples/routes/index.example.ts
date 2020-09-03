import HomeExample from './home.example';
import AutoCompleteExample from './autoComplete.example';
import ButtonExample from './button.example';
import IconExample from './icon.example';
import InputExample from './input.example';
import TransitionExample from './transition.example';

export default [
  {
    title: '首页',
    to: '/',
    exact: true,
    component: HomeExample
  },
  {
    title: '自动完成',
    to: '/autoComplete',
    exact: true,
    component: AutoCompleteExample
  },
  {
    title: '按钮',
    to: '/button',
    exact: true,
    component: ButtonExample
  },
  {
    title: 'icon',
    to: '/icon',
    exact: true,
    component: IconExample
  },
  {
    title: 'input',
    to: '/input',
    exact: true,
    component: InputExample
  },
  {
    title: '动画',
    to: '/animation',
    exact: true,
    component: TransitionExample
  },
]
