import * as React from 'react';
import { Animated, View, Text, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import HomeSectionComponent from '../components/HomeSectionComponents';
import BanerComponents from '../components/BanerComponents';
import MenuComponent from '../components/MenuComponents';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/HeaderComponents';

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <Header />
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color="#969696" />
          <TextInput style={styles.inputText}
            placeholder="Bạn muốn uống gì hôm nay?"
          ></TextInput>
        </View>
        {/*  */}
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetail')}>
          <View style={styles.cartContainer}>
            <FontAwesome name="shopping-cart" size={24} color="#fff" />
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}>
          <View style={styles.cartContainer}>
            <FontAwesome name="shopping-cart" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
      </View>
      <ScrollView>
        <BanerComponents />
        <MenuComponent />
        <HomeSectionComponent navigation={navigation}/>
        <HomeSectionComponent navigation={navigation}/>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

var styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: '#8c0606',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  cartContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 12,
  },
});
