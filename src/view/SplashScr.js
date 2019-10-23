import { View } from "native-base";
import React from 'react';
import { Image, StatusBar } from 'react-native';
import splashscreen from './../assets/images/splashscreen.png';
import { resetNavigation } from './../redux/actions/commonAction';

class SplashScreen extends React.Component {
  static navigationOptions = { header: null }

  state = {

  }

  componentDidMount = () => {
    resetNavigation('Home', this.props.navigation);
  }

  render() {
    return (
      <View>
        <StatusBar hidden />
        <Image source={splashscreen} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
      </View>
    );
  }
}


export default SplashScreen
