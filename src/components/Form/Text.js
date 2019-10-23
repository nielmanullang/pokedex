import { Input, Label, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../native-base-theme/variables/fonts';

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15
    },
    bodySide: {
        flex: 6,
        paddingLeft: 20
    },
    rightSide: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        paddingLeft: 5,
        fontSize: moderateScale(14)
    },
    icon: {
        color: '#c8a23f',
    },
});

class TextForm extends React.Component {

    renderLabel = () => {
        if (this.props.item.label != '' && this.props.item.label != null) {
            return <Label style={styles.label}>{this.props.item.label}</Label>
        }
    }

    render() {
        let type = 'default';
        if (this.props.type !== null) {
            type = this.props.type
        }
        let index = '';
        if (this.props.item.index !== null) {
            index = this.props.item.index
        }
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <View horizontalColumn style={styles.container}>
                    {this.renderLabel()}
                    <Input
                        keyboardType={type}
                        placeholderTextColor={'#868686'}
                        placeholder={this.props.item.placeholder}
                        onChangeText={value => this.props.changeText(value, index)}
                        value={this.props.item.value}
                        disabled={this.props.disabled ? this.props.disabled : false}
                        maxLength={this.props.maxLength ? this.props.maxLength : 50}
                        style={{ borderWidth: 1, borderColor: '#000000', borderRadius: 10 }}
                    />

                </View>
            </View>
        )
    }
}

export default TextForm;