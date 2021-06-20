import * as React from 'react';
import { TouchableOpacity, Animated, View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Animated.Image
                        animation="bounceIn"
                        duraton="1500"
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                        resizeMode={"stretch"}
                    />
                </View>
                <Animated.View
                    style={styles.footer}
                    animation="fadeInUpBig">
                    <Text style={styles.text}>Chào Mừng Bạn Đến Với</Text>
                    <Text style={styles.title}>THE COFFEE STUDY</Text>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignInScreen')}>
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}>
                                <Text style={styles.textSign}>Get Started </Text>
                                <AntDesign name="right" size={15} color="#fff" />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        )
    }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B63711'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
    title: {
        color: '#05375a',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'sans-serif'
    },
    text: {
        color: 'gray',
        textAlign: 'center'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    }
});