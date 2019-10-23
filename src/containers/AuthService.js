import React from 'react';
import { View } from 'react-native';

class AuthService extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.children}
      </View>
    );
  }
}

export default AuthService;  
