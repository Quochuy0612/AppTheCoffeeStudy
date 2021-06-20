import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import NotificationScreen from './NotificationScreen';
import StudyScreen from './StudyScreen';
import CartScreen from './CartScreen';



const Tab = createBottomTabNavigator();


const MainTabScreen = () => (
  <Tab.Navigator headerMode='none'>
    <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarLabel: 'Trang Chủ',
      tabBarColor: '#009387',
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="home" size={24} color="#b71c1c" />
      ),
    }} />
    <Tab.Screen name="Notification" component={NotificationScreen} options={{
      tabBarLabel: 'Thông Báo',
      tabBarColor: '#009387',
      tabBarIcon: ({ color }) => (
        <Ionicons name="notifications" size={24} color="#b71c1c" />
      ),
    }} />
    <Tab.Screen name="Study" component={StudyScreen} options={{
      tabBarLabel: 'Học Tập',
      tabBarColor: '#009387',
      tabBarIcon: ({ color }) => (
        <Feather name="book-open" size={24} color="#b71c1c" />
      ),
    }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
      tabBarLabel: 'Cá Nhân',
      tabBarColor: '#009387',
      tabBarIcon: ({ color }) => (
        <FontAwesome name="user" size={24} color="#b71c1c" />
      ),
    }} />
  </Tab.Navigator>
);


export default MainTabScreen;
