import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../native-base-theme/variables/fonts';
import ImageForm from '../../components/Form/Image';

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 5
    },
    row: {
        marginBottom: 15,
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(15)
    },
    label: {
        fontSize: moderateScale(13),
        fontWeight: 'bold',
        color: '#3D3D3D'
    },
    value: {
        fontSize: moderateScale(13),
        color: '#3D3D3D'
    },
});

class ListDetail extends React.Component {

    renderListItem = () => {
        if (this.props.listItem != null) {
            return this.props.listItem.map((data, i) => {
                if (data.label == '') {
                    data.label = null;
                }
                if (data.value == '') {
                    data.value = null;
                }
                if (data.label == 'Image' && data.value != null && data.value != "") {
                    return <ImageForm key={i} item={{ text: 'ADD YOUR PHOTO', value: { uri: data.value } }} resizeMode={'stretch'} isClick={false} style={{ flex: 1, height: 200 }} />
                } else {
                    return <View key={i} horizontalRow style={styles.row}>
                        <View style={{ flex: 3, paddingTop: 5 }}>
                            {data.label && <Text style={styles.label}>{data.label}</Text>}
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', paddingTop: 5 }}>
                            <Text>:</Text>
                        </View>
                        <View style={{ flex: 5, paddingTop: 5 }}>
                            {data.value && <Text style={styles.value}>{data.value}</Text>}
                        </View>
                    </View>
                }
            })
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', marginBottom: 10 }}>
                <View horizontalColumn style={styles.container}>
                    {this.renderListItem()}
                </View>
            </View>
        )
    }
}

export default ListDetail;