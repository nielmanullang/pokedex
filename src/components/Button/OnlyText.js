import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderTopColor: '#E6E6E6',
        borderTopWidth: 0.5
    },
    cover: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 2,
        color: '#3d3d3d',
    },
    note: {
        color: '#3d3d3d',
        fontSize: 12,
        letterSpacing: 2,
    },
});

class OnlyText extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props._pickItem()}
                >
                    <View padderTop padderBottom horizontalRow style={styles.cover}>
                        {this.props.item.text && <Text style={styles.title}>{this.props.item.text}</Text>}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default OnlyText;