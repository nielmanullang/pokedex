import { Icon, Text, View } from 'native-base';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    border: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#979797',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },
    borderDash: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#979797',
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: '#959595'
    },
    icon: {
        color: '#F0F0F0',
        margin: 10,
    },
    iconImage: {
        color: '#F0F0F0',
        margin: 10,
        fontSize: 12
    },
    pic: {
        flex: 1,
        alignSelf: 'stretch',
        height: undefined,
        width: undefined,
        borderRadius: 3,
        resizeMode: "contain"
    },
});

class ImageForm extends React.Component {
    _actionClick = (paramAction) => {
        if (this.props.type !== null && this.props.cardId !== undefined) {
            this.props._actionClick(paramAction, this.props.cardId)
        } else {
            this.props._actionClick(paramAction)
        }
    }

    renderPhoto = () => {
        let resizeMode = 'contain';
        if (this.props.resizeMode !== null && this.props.resizeMode !== undefined) {
            resizeMode = this.props.resizeMode
        }
        let displayPhoto = null;
        let paramAction = true;
        if (this.props.type !== null && this.props.type !== undefined) {
            paramAction = this.props.type
        }
        let isClick = false;
        if (this.props.isClick !== null && this.props.isClick !== '') {
            isClick = this.props.isClick;
        }
        if (isClick) {
            if (this.props.item.value !== '' && this.props.item.value !== null) {
                if (this.props.style.height !== null && this.props.style.height !== undefined) {
                    displayPhoto = <TouchableOpacity onPress={() => this._actionClick(paramAction)}>
                        <View style={{ borderRadius: 3, borderWidth: 1, borderColor: '#979797', alignItems: 'center', justifyContent: 'center', height: this.props.style.height, }}>
                            <Image source={this.props.item.value} style={{ flex: 1, alignSelf: 'stretch', height: undefined, width: undefined, borderRadius: 3, resizeMode: resizeMode }} />
                        </View>
                        <View style={{ position: 'absolute', top: 10, right: 10, backgroundColor: '#EF5350', borderRadius: 30, }}>
                            <Icon style={styles.iconImage} type="FontAwesome" name='trash' />
                        </View>
                    </TouchableOpacity>
                } else {
                    displayPhoto = <TouchableOpacity onPress={() => this.props._actionClick(paramAction)}>
                        <View style={styles.border}>
                            <Image source={this.props.item.value} style={{ flex: 1, alignSelf: 'stretch', height: undefined, width: undefined, borderRadius: 3, resizeMode: resizeMode }} />
                        </View>
                        <View style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: this.props.dataUnit.unitType.product.category === "commercial" ? '#6395F9' : '#E8BE62', borderRadius: 30, }}>
                            <Icon style={styles.iconImage} type="FontAwesome" name='camera' />
                        </View>
                    </TouchableOpacity>
                }
            } else {
                if (this.props.style.height !== null && this.props.style.height !== undefined) {
                    // free height
                    displayPhoto = <TouchableOpacity onPress={() => this.props._actionForm()}>
                        <View style={{ borderRadius: 3, borderWidth: 1, borderColor: '#979797', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', height: this.props.style.height }}>
                            <View horizontalColumn style={styles.content}>
                                <Icon style={styles.icon} type="FontAwesome" name='plus-circle' />
                                <Text style={styles.text}>{this.props.item.text}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                } else {
                    displayPhoto = <TouchableOpacity onPress={() => this.props._actionForm(paramAction)}>
                        <View style={styles.borderDash}>
                            <View horizontalColumn style={styles.content}>
                                <Icon style={styles.icon} type="FontAwesome" name='plus-circle' />
                                <Text style={styles.text}>{this.props.item.text}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                }
            }
        } else {
            displayPhoto = <View style={styles.border}>
                <Image source={this.props.item.value} style={{ flex: 1, alignSelf: 'stretch', height: undefined, width: undefined, borderRadius: 3, resizeMode: resizeMode }} />
            </View>
        }

        return displayPhoto;
    }

    render() {
        return (
            <View style={{ flex: this.props.style.flex }}>
                <View horizontalColumn style={styles.container}>
                    {this.renderPhoto()}
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataUnit: state.unit.dataUnit
    }
};

export default connect(mapStateToProps)(ImageForm)