import * as React from 'react';
import { StyleSheet, View, StatusBar, FlatList,TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/HeaderComponents';


const NotificationItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemTopContainer}>
      <View
        style={[
          styles.itemTypeContainer,
          {
            backgroundColor: item.type === 1 ? '#fc820a' : '#dc3988',
          },
        ]}>
        <MaterialCommunityIcons
          name={item.type === 1 ? 'sale' : 'backup-restore'}
          color="#fff"
          size={22}
        />
      </View>
      <View style={styles.itemTopTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.itemDetail}>{item.detail}</Text>
    </View>
  </View>
);
const NotificationScreen = ({ navigation }) => {


  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header />
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}
          >Thông Báo</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <View style={styles.buttonActiveContainer}>
            <View style={styles.activeMark} />
            <MaterialCommunityIcons
              name="home"
              color="#949494"
              size={22}
              style={styles.activeIcon}
            />
          </View>
          <View style={styles.buttonInactiveContainer}>
            <MaterialCommunityIcons
              name="backup-restore"
              color="#949494"
              size={22}
            />
          </View>
          <View style={styles.buttonInactiveContainer}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Discont')}>
            <MaterialCommunityIcons name="sale" color="#949494" size={22} />
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={[
              {
                id: 1,
                type: 1,
                name: 'Voucher Học Tiếng Anh',
                date: '02/03/2021',
                detail:
                  'Nhận Ngay Voucher giảm 15% học phí khi có hóa đơn 300k tại The Coffee Study',
              },
              {
                id: 2,
                type: 2,
                name: 'Thức Uống Bạc Xỉu Hương Vị Mới Vừa Được Ra Mắt',
                date: '01/03/2021',
                detail:
                  'The Coffee Study vừa cho ra mắt Thức uống siêu lạ mời các bạn đến thưởng thức... XEM NGAY.',
              },
              {
                id: 3,
                type: 1,
                name: 'Thông Báo Mở lớp Speaking',
                date: '28/02/2021',
                detail:
                  'Mở lớp giao tiếp căn bản dành cho người mất gốc nhanh tay đăng ký nào',
              },
              {
                id: 4,
                name: 'Voucher Học Tiếng Anh',
                date: '02/03/2021',
                detail:
                  'Nhận Ngay Voucher giảm 15% học phí khi có hóa đơn 300k tại The Coffee Study',
              },
              {
                id: 5,
                type: 1,
                name: 'Thức Uống Bạc Xỉu Hương Vị Mới Vừa Được Ra Mắt',
                date: '01/03/2021',
                detail:
                  'The Coffee Study vừa cho ra mắt Thức uống siêu lạ mời các bạn đến thưởng thức... XEM NGAY.',
              },
              {
                id: 6,
                name: 'Thông Báo Mở lớp Speaking',
                date: '28/02/2021',
                detail:
                  'Mở lớp giao tiếp căn bản dành cho người mất gốc nhanh tay đăng ký nào',
              },
            ]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <NotificationItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;

var styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
    flexDirection: 'row',
  },
  buttonActiveContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  buttonInactiveContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  activeMark: {
    backgroundColor: '#1e88e5',
    width: 4,
  },
  activeIcon: {
    padding: 12,
    // trick
    marginLeft: -4,
  },
  //
  listContainer: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
  },
  //
  itemContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  itemTopContainer: {
    flexDirection: 'row',
  },
  itemTypeContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTopTextContainer: {
    marginRight: 40,
    marginLeft: 4,
  },
  itemName: {
    color: '#000',
    fontWeight: '500',
  },
  itemDate: {
    color: '#787878',
    fontSize: 12,
    marginTop: 8,
  },
  itemDetail: {
    color: '#787878',
    // fontSize: 12,
    marginTop: 12,
  },

  inputText: {
    color: '#ffff',
    fontSize: 22,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 4,
    paddingBottom: 10,
    backgroundColor: '#8c0606',
  }
});
