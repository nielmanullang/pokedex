import moment from 'moment';
import { Button, Container, Content, Header, Icon, Left, Right, Text, View } from 'native-base';
import React from 'react';
import { Dimensions, Keyboard, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { convertNumber, convertUnderscoreToSpace, ObjectLength } from '../../native-base-theme/variables/convert';
import Toast from './../components/Toast';
import { apiCall, getAsyncStoreLoad, getAsyncStoreSave, resetNavigation } from './../redux/actions/commonAction';
import endPoint from './../redux/service/endPoint';

class HomeScreen extends React.Component {
  static navigationOptions = { header: null }
  state = {

  }

  render() {
    return (
      <Container>
        <Header androidStatusBarColor="transparent" iosStatusbar="light-content" style={{ marginTop: Dimensions.get("window").height === 812 && Platform.OS == "ios" ? -60 : 0 }}>
          <Left />
          <Right />
        </Header>
        <Content>
          <View></View>
        </Content>
        <Toast ref="defaultToastBottom" position="bottom" />
      </Container>
    );
  }
}

export default HomeScreen
