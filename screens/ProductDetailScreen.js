import React, { useState } from "react";
import { TouchableOpacity, Animated, View, Text, Image, StyleSheet, StatusBar, TextInput, Button, Alert, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const ProductDetailScreen = ({ navigation }) => {

    const [count, setCount] = useState(0);
    const onPresscong = () => setCount(prevCount => prevCount + 1);
    const onPresstru = () => setCount(prevCount => prevCount - 1);
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.TRADAOCAMSA}
                source={require('../assets//images/TRADOACAMSA.jpg')} />
            <View style={styles.header} >
                <Text style={styles.stext}>Trà Đào Cam Sả</Text>
                <View style={styles.fixToText}>
                    <Text style={styles.prince}>30.000đ</Text>
                    <View style={styles.fixToText}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onPresstru}>
                            <AntDesign name="minuscircle" size={24} color="black" />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.counttext}>{count}</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={onPresscong}>
                            <AntDesign name="pluscircle" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.ghichu}>
                <View>
                    <Text>
                        A basic button component that should render nicely on any platform. Supports a minimal level of customization.

                        If this button doesn't look right for your app, you can build your own button using
                    </Text>
                </View>
            </View>


            <View style={styles.yeucau}>
                <View>
                    <Text>Yêu cầu khác</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Ví dụ: Ít đá, nhiều đường,..." />
                </View>
            </View>
            <View style={styles.cart}>
                <View style={styles.fixToText}>
                    <Button
                        title="Thêm vào giỏ hàng"
                        onPress={() => navigation.navigate('Cart')}
                    />
                        <Button
                            title="Mua Ngay"
                            onPress={() => navigation.navigate('payScreen')}
                        />
                </View>
            </View>
        </ScrollView>
    );
};

export default ProductDetailScreen;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    TRADAOCAMSA: {
        height: 400,
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 15
    },
    stext: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    prince: {
        fontSize: 20
    },
    danhgia: {
        marginTop: 30
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputContainer: {
        backgroundColor: '#fff',
        marginLeft: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
    },
    inputText: {
        color: '#969696',
        fontSize: 14,
        marginLeft: 8,
        fontWeight: '500',
    },
    header: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 15
    },
    yeucau: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
    },
    counttext: {
        marginLeft: 20,
        marginRight: 20
    },
    cart: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginTop: 15
    },
    ghichu: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 15
    }
});