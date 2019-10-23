import { Icon, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
    },
    bodySide: {
        flex: 0.7,
    },
    rightSide: {
        flex: 0.3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: '#3d3d3d',
    },
    icon: {
        color: '#ECBF5D',
    },
    icon2: {
        color: '#6395F9',
    },
    iconDisable: {
        color: '#DBDBDB',
    },
});

class ToggleForm extends React.Component {

    render() {
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <View horizontalColumn style={styles.container}>
                    <View horizontalRow>
                        <View style={styles.bodySide}>
                            <View horizontalColumn>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>{this.props.item.title}</Text>
                                {this.props.item.desc && <Text style={{ fontSize: 13, color: '#9A9A9A' }}>{this.props.item.desc}</Text>}
                            </View>
                        </View>
                        <View style={styles.rightSide}>
                            <View horizontalRow>
                                <Text style={{ paddingTop: 5, paddingRight: 10 }}>{this.props.item.value ? 'Yes' : 'No'}</Text>
                                <TouchableOpacity
                                    onPress={() => this.props._actionForm()}
                                >
                                    {this.props.item.value ?
                                        <View>
                                            {this.props.dataUnit !== undefined && this.props.dataUnit.unitType.product.category === "commercial" ? <Icon style={this.props.item.value ? styles.icon2 : styles.iconDisable} type="FontAwesome" name='toggle-on' /> : <Icon style={this.props.item.value ? styles.icon : styles.iconDisable} type="FontAwesome" name='toggle-on' />}

                                        </View> :
                                        <View>
                                            <Icon style={{ color: '#868686' }} type="FontAwesome" name='toggle-off' />
                                        </View>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default ToggleForm;