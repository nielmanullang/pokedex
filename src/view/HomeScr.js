import { Container, Content, Header, Left, Right, View } from 'native-base';
import React from 'react';
import { Dimensions, Platform } from 'react-native';
import ListPokemon from './../components/ListItem/ListPokemon';
import Toast from './../components/Toast';
import { apiCall } from './../redux/actions/commonAction';
import endPoint from './../redux/service/endPoint';

class HomeScreen extends React.Component {
  static navigationOptions = { header: null }
  state = {
    listPokemon: []
  }

  componentDidMount = () => {
    this.getListPokemon()
  }

  getListPokemon = () => {
    const api = endPoint.pokemon
    const header = {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    apiCall.get(api, header, this.responeListPokemon);
  }

  responeListPokemon = (callback) => {
    console.log('callback', callback);
    if (callback.data.count > 0) {
      let listPokemon = callback.data.results
      this.setState({ listPokemon })
    } else {
      this.refs.defaultToastBottom.ShowToastFunction('Oops!! Something Went Wrong')
    }
  }

  _action = (data) => {
    this.props.navigation.navigate('DetailPokemon', { data: data })
  }

  render() {

    return (
      <Container>
        <Header androidStatusBarColor="transparent" iosStatusbar="light-content" style={{ marginTop: Dimensions.get("window").height === 812 && Platform.OS == "ios" ? -60 : 0 }}>
          <Left />
          <Right />
        </Header>
        <Content>
          <View>
            <ListPokemon
              listPokemon={this.state.listPokemon}
              _action={this._action}
            />
          </View>
        </Content>
        <Toast ref="defaultToastBottom" position="bottom" />
      </Container>
    );
  }
}

export default HomeScreen
