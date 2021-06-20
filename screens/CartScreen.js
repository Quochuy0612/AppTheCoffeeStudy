import React, { useState } from "react";
import { TouchableOpacity, Animated, View, Text, Image, StyleSheet, StatusBar, TextInput, Button, Alert, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {

    const [count, setCount] = useState(1);
    const onPresscong = () => setCount(prevCount => prevCount + 1);
    const onPresstru = () => setCount(prevCount => {
        if (prevCount > 1) {
            return prevCount -1;
        }
        else
            return prevCount = 1;
    });

    return (
        <ScrollView style={styles.container}>

            <View>
                <Text style={styles.headergh}>Giỏ Hàng</Text>
            </View>

            <View style={styles.fixToTextheager}>
                <Text style={styles.textm}>Các món đã chọn</Text>
                <View style={styles.buttonremove}>
                    <Button title="Xóa tất cả"
                        onPress={() => Alert.alert('Xóa thành công')} />
                </View>
            </View>


            <View style={styles.fixToText}>
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
            </View>

            <View style={styles.tongcong}>
                <View>
                    <Text style={styles.textm}>Tổng Cộng</Text>
                    <View style={styles.fixToText}>
                        <Text>Tổng Cộng</Text>
                        <Text>30.000đ</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.discount}
                onPress={() => navigation.navigate('DiscountScreen')}>
                <View style={styles.khuyenmai}>
                    <Text style={styles.textm}>Khuyến mãi</Text>
                    <View style={styles.fixToText}>
                        <Text style={styles.textkm}>Bấm vào để chọn khuyến mãi</Text>
                        <FontAwesome name="angle-right" size={26} color="#1e88e5" />
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.thanhtoan}>
                <View style={styles.fixToText}>
                    <Text style={styles.textm}>Số tiền thanh toán</Text>
                    <Text>30.000đ</Text>
                </View>
            </View>
            <View style={styles.cart}>
                <Button title="Mua hàng"
                    onPress={() => navigation.navigate('payScreen')} />
            </View>
        </ScrollView>
    );
};

export default CartScreen;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    TRADAOCAMSA: {
        height: 100,
        width: 100,
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginBottom: 15,
        marginLeft: 5,
        marginTop: 5
    },
    stext: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,

    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 40,
        borderRadius: 2,
        marginBottom: 15
    },
    thanhtoan: {
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
    tongcong: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 15
    },
    textm: {
        fontSize: 18,
        fontWeight: "bold",

    },
    fixToTextheager: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 15
    },
    khuyenmai: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 15
    },
    headergh: {
        textAlign: "center",
        fontSize: 25,
        backgroundColor: '#990000',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 15,
        color: 'white'
    },
    textkm: {
        color: '#0000FF'
    }
});