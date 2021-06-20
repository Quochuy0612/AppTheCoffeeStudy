import React, { useState } from "react";
import { TouchableOpacity, Animated, View, Text, Image, StyleSheet, StatusBar, TextInput, Button, Alert, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const payScreen = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>

            <View>
                <Text style={styles.headergh}>Thanh Toán</Text>
            </View>

            <View style={styles.fixToTextheager}>
                <Text style={styles.textm}>Giao tận nơi</Text>
                <View>
                    <Button title="Thay đổi"
                        onPress={() => Alert.alert('Thay đổi thành công')} />
                </View>
            </View>


            <View style={styles.diachi}>
                <View>
                    <Text>Giao đến địa chỉ: </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nhập địa chỉ mà bạn muốn giao tới" />
                </View>
            </View>

            <View style={styles.diachi}>
                <View>
                    <Text> Hướng dẫn giao hàng </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Ví dụ: rẽ trái đường Nguyễn Văn Linh" />
                </View>
            </View>

            <View style={styles.tongcong}>
                <View>
                    <Text style={styles.textm}>Thông tin người nhận</Text>
                </View>

                <View>
                    <Text>Người nhận</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="NGUYỄN PHƯƠNG THẢO" />
                </View>
            </View>

            <View style={styles.tongcong}>
                <View>
                    <Text>Số điện thoại</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="0983953916" />
                </View>
            </View>

            <View style={styles.thanhtoan}>
                <View>
                    <Text style={styles.textm}>Thanh Toán</Text>
                </View>
                <TouchableOpacity style={styles.phuongthuctt}
                    onPress={() => navigation.navigate('PaymentMethod')}>
                    <View style={styles.fixToText}>
                        <Text style = {styles.texttt}>Bấm để chọn phương thức thanh toán</Text>
                        <FontAwesome name="angle-right" size={26} color="#1e88e5" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.cart}>
                <Text style={styles.title}></Text>
                <Button title="Mua hàng"
                    onPress={() => Alert.alert('Mua hàng thành công')} />
            </View>
        </ScrollView>
    );
};

export default payScreen;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
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
        color: 'white',
    },
    diachi: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 15
    },
    texttt:{
        color: '#0000FF'
    }
});