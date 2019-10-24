import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { convertNumber } from '../../../native-base-theme/variables/convert';
import { moderateScale } from '../../../native-base-theme/variables/fonts';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    marked: { marginBottom: 10, marginBottom: 24, padding: 8, borderWidth: 1, borderColor: '#F0F0F0', width: WIDTH / 5, height: 45, marginLeft: 2, marginRight: 2, backgroundColor: '#CC9E1E', justifyContent: 'center', alignItems: 'center' },
    mark: { marginBottom: 10, marginBottom: 24, padding: 8, borderWidth: 1, borderColor: '#F0F0F0', width: WIDTH / 5, height: 45, marginLeft: 2, marginRight: 2, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' },
    text: { color: '#000', fontSize: 12, textAlign: 'center' }
});

class Filter extends React.Component {
    render() {
        return (
            <Modal
                isVisible={this.props.modalVisible}
                onBackdropPress={() => this.props._isVisible(false)}
                onRequestClose={() => this.props._isVisible(false)}
            >
                <View style={{ backgroundColor: '#fff' }}>
                    <View padderTop style={{ flexDirection: 'row', borderTopColor: '#F8F8F8', borderTopWidth: 1 }}>
                        <View style={{ flex: 0.2, alignItems: 'center', }}>
                            <TouchableOpacity
                                onPress={() => this.props._isVisible(false)}>
                                <Text>Back</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.6, alignItems: 'center', }}>
                            <Text>Filter Type</Text>
                        </View>
                        <View style={{ flex: 0.2, alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => this.props.clearFilter()}>
                                <Text>Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View padder style={{ flexDirection: 'column' }}>
                            <View horizontalRow padderTop horizontal={true} style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                                {this.props.listType.map((data, i) => {
                                    return <TouchableOpacity key={i} onPress={() => this.props.pickType(data)}>
                                        <View style={data.marked ? styles.marked : styles.mark}>
                                            <Text style={styles.text}>{data.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                })}
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ backgroundColor: '#fff', }}>
                            <View style={{ alignContent: 'center', flexDirection: 'row', padding: 10, borderTopColor: '#FCFCFC', borderTopWidth: 1 }}>
                                <TouchableOpacity
                                    onPress={() => this.props._applyFilter()}
                                    style={{ backgroundColor: '#CE9D3C', width: '100%', padding: 15, alignItems: 'center' }}
                                >
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Apply</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal >
        )
    }
}

export default Filter;