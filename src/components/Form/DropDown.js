import { Icon, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20
    },
    content: {
        paddingTop: 10,
        paddingBottom: 10,
        // paddingLeft: 5,
    },
    bodySide: {
        flex: 6,
    },
    rightSide: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 15,
        color: '#575757',
        paddingRight: 5,
        // paddingLeft: 5,
        fontWeight: 'bold'
    },
    value: {
        fontSize: 15,
        paddingRight: 5,
        // paddingLeft: 5,
    },
    placeholder: {
        color: '#E5E5E5',
        fontSize: 15,
        paddingRight: 5,
        // paddingLeft: 5,
    },
    icon: {
        color: '#c8a23f',
    },
    icon2: {
        color: '#6395F9',
    },
    iconDisable: {
        color: '#E5E5E5',
    },
    note: {
        color: '#3d3d3d',
        fontSize: 12,
        letterSpacing: 2,
        marginTop: 8
    },
    desc: {
        color: '#3d3d3d',
        fontWeight: 'bold',
        fontSize: 12,
        letterSpacing: 2,
        marginTop: 8
    }
});

class DropDownForm extends React.Component {
    _renderView = () => {
        if (this.props.disable) {
            return <View horizontalRow style={styles.content}>
                <View style={styles.bodySide}>
                    <Text style={styles.placeholder}>Select Card Type</Text>
                </View>
                <View style={styles.rightSide}>
                    <Icon style={styles.iconDisable} type="FontAwesome" name='angle-down' />
                </View>
            </View>
        } else {
            return <View>
                <Text style={styles.label}>{this.props.item.label}</Text>
                <TouchableOpacity onPress={() => this.props._actionForm(true, this.props.index)}>
                    <View horizontalRow style={styles.content}>
                        <View style={styles.bodySide}>
                            <Text
                                style={this.props.item.value != null && this.props.item.value != '' ? styles.value : styles.placeholder}>
                                {this.props.item.value != null && this.props.item.value != '' ? this.props.item.value.text : this.props.item.placeholder}
                            </Text>
                            {this.props.item.value && this.props.item.value.note && <Text style={styles.note}>{this.props.item.value.note}</Text>}
                            {this.props.item.value && this.props.item.value.desc && <Text style={styles.desc}>{this.props.item.value.desc}</Text>}
                        </View>
                        <View style={styles.rightSide}>
                            <Icon style={this.props.dataUnit !== undefined && this.props.dataUnit.unitType !== undefined && this.props.dataUnit.unitType.product.category === "commercial" ? styles.icon2 : styles.icon} type="FontAwesome" name='angle-down' />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <View style={styles.container}>

                    {this._renderView()}

                    <View style={{ borderTopColor: '#E5E5E5', borderTopWidth: 1 }}></View>
                </View>
            </View>
        )
    }
}

export default DropDownForm;