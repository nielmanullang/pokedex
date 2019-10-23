import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    coverBtn: {
        backgroundColor: '#fff',
        marginTop: 10
    },
    btnNext: {
        alignContent: 'center',
        flexDirection: 'row',
        padding: 10,
        borderTopColor: '#FCFCFC',
        borderTopWidth: 1
    },
    btnNextLink: {
        backgroundColor: '#CE9D3C',
        width: '100%',
        padding: 15,
        alignItems: 'center'
    },
    btnNextLink2: {
        backgroundColor: '#6395F9',
        width: '100%',
        padding: 15,
        alignItems: 'center'
    },
    btnNextLinkDisable: {
        backgroundColor: '#868686',
        width: '100%',
        padding: 15,
        alignItems: 'center'
    },
    btnNextText: {
        color: '#fff',
        fontWeight: 'bold'
    },
});

class Default extends React.Component {

    renderButton = () => {
        if (this.props.isActive == false) {
            return <View style={styles.btnNextLinkDisable}>
                <Text style={styles.btnNextText}>SUBMIT</Text>
            </View>
        } else {
            return <TouchableOpacity
                onPress={() => this.props._submit()}
                style={this.props.dataUnit !== undefined && this.props.dataUnit.unitType.product.category === "commercial" ? styles.btnNextLink2 : styles.btnNextLink}
            >
                <Text style={styles.btnNextText}>SUBMIT</Text>
            </TouchableOpacity>
        }
    }

    render() {
        return (
            <View style={styles.coverBtn}>
                <View style={styles.btnNext}>
                    {this.renderButton()}
                </View>
            </View>
        )
    }
}

export default Default;