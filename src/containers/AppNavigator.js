import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScr from '../view/HomeScr';
import SplashScr from '../view/SplashScr';


const AppNavigator = createStackNavigator({
  Splash: { screen: SplashScr },
  Home: { screen: HomeScr }

}, {
    initialRouteName: 'Splash',
  });

export default createAppContainer(AppNavigator);
