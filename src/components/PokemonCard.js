import { Text, View } from 'native-base';
import React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { moderateScale } from '../../native-base-theme/variables/fonts';

const WIDTH = Dimensions.get('window').width;

class PokemonCard extends React.Component {

    render() {
        let paddingImg = WIDTH * 0.012;
        let widthImg = WIDTH * 0.25;
        return (
            <TouchableOpacity onPress={() => this.props._action(this.props.item)}>
                <View style={{ marginBottom: 10, marginBottom: 24, padding: 8, borderWidth: 1, borderColor: '#F0F0F0', width: widthImg, height: widthImg, marginLeft: paddingImg, marginRight: paddingImg }}>
                    <Image source={{ uri: this.props.item.urlImage }} style={{ flex: 1, alignSelf: 'stretch', height: undefined, width: undefined, borderRadius: 3, resizeMode: 'stretch' }} />
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: moderateScale(9), marginTop: 15, fontWeight: 'bold', marginBottom: 5 }}>{this.props.item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default PokemonCard;
