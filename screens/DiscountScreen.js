import React, { Component, useState } from "react";
import { TouchableOpacity, Animated, View, Text, Image, StyleSheet, StatusBar, TextInput, Button, Alert, ScrollView, Radio } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../components/HeaderComponents';

const CartScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <View>
                    <Text style={styles.headergh}>Ví Voucher</Text>
                </View>

                <View style={styles.fixToText}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nhập mã giảm giá" />
                    <View>
                        <Button title="Áp dụng"
                            onPress={() => Alert.alert('Áp dụng thành công')} />
                    </View>
                </View>

                <View style={styles.bodydiscount}>
                    <View style={styles.discount}>
                        <FontAwesome5 name="shipping-fast" size={30} color="#4CAF50" />
                        {/* <Image style={styles.mpvanchuyen}
                    source={require('../assets//images/mpvanchuyen.jpg')} /> */}
                        <View style={styles.textmpvc}>
                            <Text>Mã giảm 15k trên phí vận chuyển, đơn tối thiểu 60k</Text>
                            <Text>HSD: 3 ngày còn lại</Text>
                        </View>
                    </View>

                    <View style={styles.discount}>
                        <FontAwesome5 name="shipping-fast" size={30} color="#4CAF50" />
                        {/* <Image style={styles.mpvanchuyen}
                    source={require('../assets//images/mpvanchuyen.jpg')} /> */}
                        <View style={styles.textmpvc}>
                            <Text>Mã giảm 15k trên phí vận chuyển, đơn tối thiểu 60k</Text>
                            <Text>HSD: 3 ngày còn lại</Text>
                        </View>
                    </View>

                    <View style={styles.discount}>
                        <FontAwesome name="ticket" size={30} color="#4CAF50" />
                        {/* <Image style={styles.mpvanchuyen}
                        source={require('../assets//images/voucherIcon.jpg')} /> */}
                        <View style={styles.textmpvc}>
                            <Text>Giảm 10% cho các học viên có điểm tổng sau 1 khóa học từ 7.0 đến 8.4</Text>
                            <Text>HSD: 3 ngày còn lại</Text>
                        </View>
                    </View>

                    <View style={styles.discount}>
                        <FontAwesome name="ticket" size={30} color="#4CAF50" />
                        {/* <Image style={styles.mpvanchuyen}
                        source={require('../assets//images/voucherIcon.jpg')} /> */}
                        <View style={styles.textmpvc}>
                            <Text>Giảm 20% đối với học viên có điểm tổng sau 1 khóa học từ 8.5 trở lên</Text>
                            <Text>HSD: 3 ngày còn lại</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};

export default CartScreen;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
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
        color: '#FAFAFA',
        fontSize: 18,
        backgroundColor: '#8c0606',
        paddingLeft: 25,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 15
    },
    discount: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 2,
        marginBottom: 15,
    },
    textmpvc: {
        marginBottom: 1,
        paddingLeft: 4,
        flex: 1,
    },
    mpvanchuyen: {
        width: 80,
        height: 80,
        marginRight: 10
    },
});