import { Container, Text, Icon } from 'native-base';
import React from 'react';
import { Dimensions, FlatList, SafeAreaView, View, TouchableOpacity } from 'react-native';
import PokemonCard from './../components/PokemonCard';
import Toast from './../components/Toast';
import Filter from './../components/Modal/Filter';
import { apiCall } from './../redux/actions/commonAction';
import endPoint from './../redux/service/endPoint';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class HomeScreen extends React.Component {
  static navigationOptions = { header: null }
  state = {
    listPokemon: [],
    offset: 0,
    limit: 20,
    modalFilterVisible: false,
    listType: [],
    type: false
  }

  componentDidMount = () => {
    this.getListPokemon(this.state.offset, this.state.limit)
    this.getListType()
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
    if (callback.status == 200) {
      if (this.state.type === false) {
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
      }
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

  getListType = () => {
    const api = endPoint.type
    const header = {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    apiCall.get(api, header, this.responeListType);
  }

  responeListType = (callback) => {
    console.log('callback', callback);
    if (callback.status == 200) {
      let listType = callback.data.results
      listType.map(data => {
        data.marked = false
      })
      this.setState({ listType });
    } else {
      this.refs.defaultToastBottom.ShowToastFunction('Oops!! Something Went Wrong')
    }
  }

  getListPokemonByType = (type) => {
    const api = endPoint.type + '/' + type
    const header = {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    apiCall.get(api, header, this.responeListPokemonByType);
  }

  responeListPokemonByType = (callback) => {
    console.log('callback', callback);
    if (callback.status == 200) {
      let listPokemon = []
      callback.data.pokemon.map((data, i) => {
        let pokemonIndex = data.pokemon.url.split('/')[data.pokemon.url.split('/').length - 2]
        let urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonIndex + '.png'
        listPokemon.push({
          name: data.pokemon.name,
          url: data.pokemon.url,
          urlImage: urlImage,
          pokemonIndex: pokemonIndex
        })
      })
      this.setState({ listPokemon })
    } else {
      this.refs.defaultToastBottom.ShowToastFunction('Oops!! Something Went Wrong')
    }
  }

  clearFilter = () => {
    let listType = this.state.listType
    let offset = 0
    let limit = 20
    listType.map(data => {
      data.marked = false
    })
    this.setState({ listType }, () => { this.getListPokemon(offset, limit) });
  }

  _isVisibleModalFilterVisible = (visible) => {
    this.setState({ modalFilterVisible: visible })
  }

  pickType = (data) => {
    let listType = this.state.listType
    listType.map(item => {
      if (item.name == data.name) {
        console.log('data', data.name);
        item.marked = !item.marked
      } else {
        item.marked = false
      }
    })
    this.setState({ listType })
  }

  _applyFilter = () => {
    let listType = this.state.listType
    let index = listType.findIndex(x => x.marked == true);
    let offset = 0
    let limit = 20
    let select = null
    if (index >= 0) {
      select = listType[index]
      let type = select.url.split('/')[select.url.split('/').length - 2]
      this._isVisibleModalFilterVisible(false)
      this.setState({ type: true }, () => { this.getListPokemonByType(type) })
    } else {
      this.setState({ offset, limit }, () => { this.getListPokemon(offset, limit) })
    }
    this._isVisibleModalFilterVisible(false)
  }

  render() {
    return (
      <Container>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ justifyContent: 'center', flex: 1, paddingLeft: 15, paddingTop: 20, height: HEIGHT * 0.85 }}>
            <Text welcome style={{ fontWeight: 'bold', textAlign: 'center' }}>List Pokemon</Text>
            <FlatList
              style={{ marginTop: 15 }}
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
        {this.state.listPokemon.length > 0 && <View style={{ alignContent: 'center', flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#fff', position: 'absolute', borderColor: '#3d3d3d', borderWidth: 0.2, bottom: 15, paddingTop: 12, paddingBottom: 12, paddingLeft: 25, paddingRight: 25, flexDirection: 'row', shadowOffset: { width: 3, height: 3 }, shadowColor: '3d3d3d', shadowOpacity: 0.2 }} onPress={() => this.setState({ modalFilterVisible: true })}>
            <Icon style={{ fontSize: 18, marginRight: 15 }} type="FontAwesome" name='filter' /><Text style={{ fontSize: 14 }}>Filter</Text>
          </TouchableOpacity>
        </View>}
        <Toast ref="defaultToastBottom" position="bottom" />
        <Filter
          modalVisible={this.state.modalFilterVisible}
          _isVisible={this._isVisibleModalFilterVisible}
          _applyFilter={this._applyFilter}
          listType={this.state.listType}
          clearFilter={this.clearFilter}
          pickType={this.pickType}
        />
      </Container>
    );
  }
}

export default HomeScreen
