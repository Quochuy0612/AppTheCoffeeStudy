import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RootStackScreen from './screens/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ProfileScreen from './screens/ProfileScreen';
import SetingScreeen from './screens/SetingScreeen';
import CartScreen from './screens/CartScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import payScreen from './screens/payScreen';
import PaymentMethodsScreen from './screens/PaymentMethodsScreen';
import DiscontScreen from './screens/DiscountScreen'




const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={MainTabScreen}/>
          <Drawer.Screen name="Cart" component={CartScreen}/>
          <Drawer.Screen name="Edit" component={EditProfileScreen}/>
          <Drawer.Screen name="Seting" component={SetingScreeen}/>
          <Drawer.Screen name="Profile" component={ProfileScreen}/>
          <Drawer.Screen name="ProductDetail" component={ProductDetailScreen}/>
          <Drawer.Screen name="payScreen" component={payScreen}/>
          <Drawer.Screen name="PaymentMethod" component={PaymentMethodsScreen}/>
          <Drawer.Screen name="Discont" component={DiscontScreen}/>

        </Drawer.Navigator>
      </NavigationContainer >
      // <RootStackScreen/>
    )
  }
}