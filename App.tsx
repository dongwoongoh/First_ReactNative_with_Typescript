import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomTabNavigate from './src/navigations/bottom.tab.navigate';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView>
      <BottomTabNavigate />
    </SafeAreaView>
  );
}
