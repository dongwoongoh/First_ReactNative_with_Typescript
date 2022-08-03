import lounge from '../../screens/lounge';
import detail from '../../screens/detail';
import my from '../../screens/my';
import topTabNavigator from '../tab/top/top.tab.navigator';

export const routes: any[] = [
  {
    name: 'lounge',
    component: lounge,
  },
  {
    name: 'detail',
    component: detail,
  },
  {
    name: 'my',
    component: my,
  },
  {
    name: 'topTabNavigator',
    component: topTabNavigator,
  },
];
