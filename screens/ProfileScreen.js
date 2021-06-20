import * as React from 'react';
import { TouchableOpacity, ScrollView, View, Text, StyleSheet, StatusBar, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/HeaderComponents';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileItem = ({ icon, name }) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
    <Text style={[styles.itemText, { marginLeft: icon ? 20 : 0 }]}>{name}</Text>
    <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
  </View>
);


const ProfileScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header />
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}
          >Cá Nhân</Text>
        </View>
        {/*  */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}>
          <View style={styles.cartContainer}>
            <FontAwesome name="shopping-cart" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit')}>
          <View style={styles.userContainer}>
            <View style={styles.avatarContainer}>
              <FontAwesome name="user" size={26} color="#fff" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Xin Chào</Text>
              <Text style={styles.authText}>Đăng nhập/Đăng ký</Text>
            </View>
            <FontAwesome name="angle-right" size={26} color="#b71c1c" />
          </View>
        </TouchableOpacity>
        {/*  */}
        <View style={styles.divider} />
        <ProfileItem icon="format-list-bulleted" name="Quản lý đơn hàng" />
        <ProfileItem icon="cart-outline" name="Sản phẩm đã mua" />
        <ProfileItem icon="eye-outline" name="Sản phẩm đã xem" />
        <ProfileItem icon="heart-outline" name="Sản phẩm yêu thích" />
        <TouchableOpacity
          onPress={() => navigation.navigate('Discont')}>
          <ProfileItem icon="sale" name="Ví Voucher" />
        </TouchableOpacity>
        <ProfileItem icon="star-outline" name="Đánh giá" />
        {/*  */}
        <View style={styles.divider} />
        <ProfileItem name="Ưu đãi cho chủ thẻ ngân hàng" />
        <TouchableOpacity
          onPress={() => navigation.navigate('Seting')}>
          <ProfileItem name="Cài đặt" />
        </TouchableOpacity>
        {/*  */}
        <View style={styles.divider} />
        <ProfileItem icon="headphones" name="Hỗ trợ" />
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
var styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: '#8c0606',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
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
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  //
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b71c1c',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: '#828282',
  },
  authText: {
    color: '#b71c1c',
    fontSize: 18,
    fontWeight: '500',
  },
  //
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  //
  divider: {
    height: 10,
  },
});
