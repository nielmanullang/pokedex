import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScr from '../view/HomeScr';
import SplashScr from '../view/SplashScr';
import DetailPokemonScr from '../view/DetailPokemonScr';

const AppNavigator = createStackNavigator({
  Splash: { screen: SplashScr },
  Home: { screen: HomeScr },
  DetailPokemon: { screen: DetailPokemonScr }

}, {
    initialRouteName: 'Splash',
  });

export default createAppContainer(AppNavigator);
