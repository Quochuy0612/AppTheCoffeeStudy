import * as React from 'react';
import { TouchableOpacity, Button, Alert, TouchableWithoutFeedback, Animated, View, Text, StyleSheet, StatusBar, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const createTwoButtonAlert = () =>
  Alert.alert(
    "Thông báo",
    "Cập Nhật Thành Công",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );

const createThreeButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
const ProfileItem = ({ icon, name }) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
    <Text style={[styles.itemText, { marginLeft: icon ? 20 : 0 }]} >{name}</Text>
    <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
  </View>
);
const EditProfileScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}
          >Chỉnh Sửa Thông Tin</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.check}>
            <FontAwesome name="check" size={29} color="#FAFAFA" onPress={createTwoButtonAlert} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.bodyContainer}>
        <View style={styles.use}>
          <FontAwesome name="user-circle-o" size={70} color="#b71c1c" />
        </View>
      </View>
      <View style={styles.divider1}>
        <Text style={styles.font}>Chạm để thay đổi</Text>
      </View>
      <View style={styles.divider} />
      <ProfileItem name="Tên" />
      <ProfileItem name="Tên Đăng Nhập" />
      <ProfileItem name="Giới Tính" />
      <ProfileItem name="Ngày Sinh" />
      <ProfileItem name="Số Điện Thoại" />
      <ProfileItem name="Email" />
      <ProfileItem name="Tài Khoản Mạng Xã Hội" />
      <View style={styles.divider} />
      <ProfileItem name="Thay Đổi Mật Khẩu" />



    </View>
  );
};

export default EditProfileScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 6,
    paddingBottom: 10,
    backgroundColor: '#b71c1c',
  },
  divider: {
    height: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },
  check: {
    paddingVertical: 8,
    paddingRight: 18,

  },
  inputText: {
    color: '#ffff',
    fontSize: 20,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  bodyContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#E0E0E0',
  },
  use: {
    paddingLeft: 170,
    paddingBottom: 50,
  },
  divider1: {
    backgroundColor: '#8D6E63',
    height: 20,
  },
  font: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 150,
    color: '#ffff'
  },
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
});