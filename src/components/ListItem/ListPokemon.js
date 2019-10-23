import { Text, View } from 'native-base';
import React from 'react';
import PokemonCard from './../PokemonCard';

class ListPokemon extends React.Component {
    renderLisPokemon = () => {
        return this.props.listPokemon.map((data, i) => {
            let pokemonIndex = data.url.split('/')[data.url.split('/').length - 2]
            let urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonIndex + '.png'
            data.urlImage = urlImage
            return <PokemonCard
                key={i}
                item={{
                    name: data.name,
                    url: data.url,
                    urlImage: data.urlImage,
                }}
                _action={this.props._action}
            />
        })
    }

    render() {
        return (
            <View padder padderTop style={{ flexDirection: 'column' }}>
                <Text welcome style={{ fontWeight: 'bold' }}>List Pokemon</Text>
                <View horizontalRow padderTop horizontal={true} style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                    {this.renderLisPokemon()}
                </View>
            </View>
        )
    }
}

export default ListPokemon;