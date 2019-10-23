import { Input, Item, Label, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15
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
        paddingLeft: 5
    },
    icon: {
        color: '#c8a23f',
    },
});

class TextArea extends React.Component {

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
                    <Item stackedLabel last style={{ minHeight: 65, height: 120 }}>
                        {this.renderLabel()}
                        <Input
                            multiline={true}
                            numberOfLines={10}
                            style={{ textAlignVertical: 'top' }}
                            keyboardType={type}
                            placeholderTextColor={'#E5E5E5'}
                            placeholder={this.props.item.placeholder}
                            onChangeText={value => this.props.changeText(value, index)}
                            value={this.props.item.value}
                        />
                    </Item>
                </View>
            </View>
        )
    }
}

export default TextArea;