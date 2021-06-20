import * as React from 'react';
import { TouchableOpacity, Animated, View, Text, StyleSheet, StatusBar, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const SetingScreen = ({ navigation }) => {


  return (

    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={styles.iconback}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}
          >Cài Đặt</Text>
        </View>
        {/*  */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}>
          <View style={styles.cartContainer}>
            <FontAwesome name="shopping-cart" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.bodyContainer}>
          <Text style={styles.ThongbaoText}>Cho Phép Thông Báo</Text>
          <View style={styles.iconswitch}>
            <Entypo name="switch" size={30} color="#b71c1c" />
          </View>
        </View>
        <View style={styles.divider} />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.ThongbaoText}>Phiên Bản</Text>
        <Text style={styles.verText}>Ver: 1.0</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.bodyContainer}>
        <Text style={styles.ThongbaoText}>Mã Thiết Bị</Text>
        <Text style={styles.verText}>3qfh48fh</Text>
      </View>
    </View>
  );
};

export default SetingScreen;

var styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 4,
    paddingBottom: 6,
    backgroundColor: '#b71c1c',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },
  inputText: {
    color: '#ffff',
    fontSize: 18,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  cartContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconback: {
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    justifyContent: 'space-between'
  },
  divider: {
    height: 6,
    backgroundColor: '#BDBDBD',
  },
  ThongbaoText: {
    color: 'black',
    fontSize: 15,
    marginLeft: 10,
    paddingTop: 4,
  },
  verText: {
    color: 'black',
    fontSize: 15,
    paddingLeft: 240,
    paddingTop: 4,
  },
  iconswitch: {
    paddingLeft: 200,
  }
});