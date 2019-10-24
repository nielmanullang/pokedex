import { Container, Text } from 'native-base';
import React from 'react';
import { Dimensions, FlatList, SafeAreaView, View } from 'react-native';
import PokemonCard from './../components/PokemonCard';
import Toast from './../components/Toast';
import { apiCall } from './../redux/actions/commonAction';
import endPoint from './../redux/service/endPoint';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class HomeScreen extends React.Component {
  static navigationOptions = { header: null }
  state = {
    listPokemon: [],
    offset: 0,
    limit: 20
  }

  componentDidMount = () => {
    this.getListPokemon(this.state.offset, this.state.limit)
  }

  getListPokemon = (offset, limit) => {
    const api = endPoint.pokemon + '?offset=' + offset + '&limit=' + limit
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
      listPokemon.map((data, i) => {
        let pokemonIndex = data.url.split('/')[data.url.split('/').length - 2]
        let urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonIndex + '.png'
        data.urlImage = urlImage
        data.pokemonIndex = pokemonIndex
      })
      this.setState(state => ({
        listPokemon: [...state.listPokemon, ...listPokemon]
      }));
    } else {
      this.refs.defaultToastBottom.ShowToastFunction('Oops!! Something Went Wrong')
    }
  }

  _action = (data) => {
    this.props.navigation.navigate('DetailPokemon', { data: data })
  }

  onMomentumScrollBegin = () => {
    let offset = this.state.offset
    let limit = this.state.limit
    offset += 20
    limit += 20
    this.setState({ offset, limit, loading: true }, () => {
      this.getListPokemon(offset, limit)
    })
  }

  render() {
    return (
      <Container>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ justifyContent: 'center', flex: 1, paddingLeft: 15, paddingTop: 20, height: HEIGHT * 0.85 }}>
            <Text welcome style={{ fontWeight: 'bold', textAlign: 'center' }}>List Pokemon</Text>
            <FlatList
              style={{marginTop: 15}}
              data={this.state.listPokemon}
              onEndThreshold={0.5}
              onMomentumScrollBegin={this.onMomentumScrollBegin}
              renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                  <PokemonCard
                    key={item.pokemonIndex}
                    item={{
                      name: item.name,
                      url: item.url,
                      urlImage: item.urlImage,
                    }}
                    _action={this._action}
                  />
                </View>
              )}
              numColumns={3}
              keyExtractor={(item, index) => index}
            />
          </View>
        </SafeAreaView>
        <Toast ref="defaultToastBottom" position="bottom" />
      </Container>
    );
  }
}

export default HomeScreen
