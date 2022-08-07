import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import TopTabNavigate from './src/navigations/top.tab.navigate';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <TopTabNavigate />;
}
