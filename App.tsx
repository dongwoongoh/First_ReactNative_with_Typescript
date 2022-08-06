import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import BottomTabNavigate from './src/navigations/bottom.tab.navigate';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <BottomTabNavigate />;
}
