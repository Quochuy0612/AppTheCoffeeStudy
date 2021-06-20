import React, { Component, useState } from "react";
import { TouchableOpacity, Animated, View, Text, Image, StyleSheet, StatusBar, TextInput, Button, Alert, ScrollView, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

const PaymentMethodsScreen = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    return (
        <ScrollView style={styles.container}>

            <View>
                <Text style={styles.headergh}>Phương thức thanh toán</Text>
            </View>

            <View style={styles.fixToTextheager}>
                <Text style={styles.textm}>Vui lòng chọn phương thức thanh toán phù hợp cho đơn hàng của bạn.</Text>
            </View>


            <View style={styles.tongcong}>
                <Text style={styles.textm}>Phương thức thanh toán</Text>
            </View>

            <View>
                <View style={styles.fixToTextrb}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Text style={styles.textrb}>Tiền mặt</Text>
                </View>
                <View style={styles.fixToTextrb}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    /><Text style={styles.textrb}>ATM</Text>
                </View>
                <View style = {styles.fixToTextrb}>
                    <RadioButton
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')}
                    /><Text style={styles.textrb}>MoMo</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default PaymentMethodsScreen;

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
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 15
    },
    textrb:{
        marginLeft: 20,
        marginTop: 7
    },
    fixToTextrb:{
        flexDirection: 'row'
    }
});