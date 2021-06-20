import * as React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const section_banner = require('../assets/images/header1.png');

const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Image source={section_banner} style={styles.sectionImage} />
  </View>
);

export default Header;

const HEADER_ICON_SIZE = 24;

var styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    justifyContent: 'space-between',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    width: HEADER_ICON_SIZE,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  sectionImage: {
    width: width - 0,
    height: 50,
  },
});
