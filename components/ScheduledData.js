import * as React from 'react';
import { TouchableOpacity, Animated, View, Text, StyleSheet,  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';


const ScheduledData = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.bodyContainer}>
        <Text>Thứ Hai, 03/03/2021</Text>
      </View >
      <View style={styles.studyContainer}>
        <Text>
        <FontAwesome name="info" size={24} color="#fff" />
          Reading Level 2</Text>
      </View>
      <View style={styles.divider} />
      <View >
        <Text style={styles.studyContainer}>07:00 </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.timeContainer}>
        <Text >  Lớp Học : ENG 216 A</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.timeContainer}>
        <Text >Phòng Học: 305</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.timeContainer}>
        <Text >Địa Điểm: The Coffe Study</Text>
          </View>
          <View style={styles.divider} />
      <View >
      <View style={styles.divider} />
          <View style={styles.timeContainer}>
        <Text >Giảng Viên: Lê Vĩnh Tịnh</Text>
          </View>
          <View style={styles.divider} />
      <View >
        <Text style={styles.studyContainer}>09:00 </Text>
          </View>
          <View style={styles.divider1} />
    </View>
    </View>
  );
};

export default ScheduledData;

var styles = StyleSheet.create({
 
  bodyContainer: {
    flexDirection: 'row',
    backgroundColor: '#b71c1c',
    fontSize: 22,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,


  },
  studyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    color : '#d50000',
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',


  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
  },
  divider1: {
    height: 12,
    backgroundColor: '#b71c1c'
  },
  divider: {
    height: 10,
    backgroundColor: '#F5F5F5'
  }
});