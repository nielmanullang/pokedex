import { Body, CardItem, Container, Content, Header, Left, Right, Text, View } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Toast from './../components/Toast';
import { apiCall } from './../redux/actions/commonAction';
import endPoint from './../redux/service/endPoint';

class DetailPokemonScreen extends React.Component {
    static navigationOptions = { header: null }
    state = {
        urlImage: null,
        description: null,
        pokemon: null,
        pokemonSpecies: null
    }

    componentDidMount = () => {
        let data = this.props.navigation.state.params.data
        let pokemonIndex = data.url.split('/')[data.url.split('/').length - 2]
        let urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonIndex + '.png'
        this.setState({ urlImage })
        this.getPokemon(pokemonIndex)
        this.getPokemonSpecies(pokemonIndex)
    }

    getPokemon = (pokemonIndex) => {
        const api = endPoint.pokemon + '/' + pokemonIndex
        const header = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        apiCall.get(api, header, this.responeGetPokemon);
    }

    responeGetPokemon = (callback) => {
        console.log('callback', callback);
        if (callback.data) {
            let pokemon = callback.data
            this.setState({ pokemon })
        } else {
            this.refs.defaultToastBottom.ShowToastFunction('Oops!! Something Went Wrong')
        }
    }

    getPokemonSpecies = (pokemonIndex) => {
        const api = endPoint.pokemonSpecies + '/' + pokemonIndex
        const header = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        apiCall.get(api, header, this.responeGetPokemonSpecies);
    }

    responeGetPokemonSpecies = (callback) => {
        console.log('callback', callback);
        if (callback.data) {
            let pokemonSpecies = callback.data
            let description = this.state.description
            pokemonSpecies.flavor_text_entries.map(flavor => {
                if (flavor.language.name === 'en') {
                    description = flavor.flavor_text;
                    return;
                }
            })
            this.setState({ pokemonSpecies, description })
        } else {
            this.refs.defaultToastBottom.ShowToastFunction('Oops!! Something Went Wrong')
        }
    }

    render() {
        let { urlImage, description, pokemon, pokemonSpecies } = this.state
        let height = pokemon != null ? Math.round((pokemon.height * 0.328084 + 0.00001) * 100) / 100 : null
        let weight = pokemon != null ? Math.round((pokemon.weight * 0.220462 + 0.00001) * 100) / 100 : null
        let catchRate = pokemonSpecies != null ? Math.round((100 / 255) * pokemonSpecies['capture_rate']) : null
        return (
            <Container>
                <Header>
                    <Left style={{ flex: 1.5 }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                            <Text style={{ width: '100%', fontWeight: 'bold' }}>Back</Text>
                        </TouchableOpacity>
                    </Left>
                    <Body style={{ flex: 7, alignItems: "center" }}>
                        <Text bold style={{ backgroundColor: '#fff' }}>{this.props.navigation.state.params.data.name.toUpperCase()}</Text>
                    </Body>
                    <Right style={{ flex: 1.5 }} />
                </Header>
                <Content>
                    <View style={{ backgroundColor: '#FFF', paddingRight: 15 }}>
                        <View style={{ flexDirection: 'row', paddingLeft: 25, paddingRight: 25, paddingTop: 15, paddingBottom: 15, borderBottomColor: '#000', borderBottomWidth: .5 }}>
                            {urlImage != null && <Image source={{ uri: urlImage }} style={{ alignSelf: 'stretch', height: 100, width: 100, borderRadius: 3, resizeMode: 'contain', marginRight: 15 }} />}
                            <Text>{description}</Text>
                        </View>
                        <View style={{ padding: 15 }}>
                            <Text bold style={{ textAlign: 'center' }}>Profile</Text>
                            <CardItem header bordered>
                                <Left>
                                    <Text>Height</Text>
                                </Left>
                                <Right>
                                    <Text style={{ textAlign: 'right' }}>{height + ' ft'}</Text>
                                </Right>
                            </CardItem>
                            <CardItem header bordered>
                                <Left>
                                    <Text>Wight</Text>
                                </Left>
                                <Right>
                                    <Text style={{ textAlign: 'right' }}>{weight + ' lbs'}</Text>
                                </Right>
                            </CardItem>
                            <CardItem header bordered>
                                <Left>
                                    <Text>Catch Rate</Text>
                                </Left>
                                <Right>
                                    <Text style={{ textAlign: 'right' }}>{catchRate + '%'}</Text>
                                </Right>
                            </CardItem>
                        </View>
                    </View>
                </Content>
                <Toast ref="defaultToastBottom" position="bottom" />
            </Container>
        );
    }
}

export default DetailPokemonScreen
