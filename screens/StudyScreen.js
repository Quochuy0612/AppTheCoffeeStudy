import * as React from 'react';
import { TouchableOpacity, Animated, View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import ScheduledData from '../components/ScheduledData';


const StudyScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}
          >Lịch Học</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.bodyContainer}>
      </View>
      <ScrollView>
        <ScheduledData />
        <ScheduledData />
        <ScheduledData />
        <ScheduledData />
        <ScheduledData />
      </ScrollView>
    </View>
  );
};

export default StudyScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 10,
    backgroundColor: '#8c0606',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 130,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },
  inputText: {
    color: '#ffff',
    fontSize: 22,
    marginLeft: 8,
    fontWeight: 'bold',
  },

  // header: {
  //       flex: 1,
  //   justifyContent: 'flex-end',
  //   paddingHorizontal: 20,
  //   paddingBottom: 50
  // },
  // footer: {
  //       flex: 3,
  //   backgroundColor: '#fff',
  //   borderTopLeftRadius: 30,
  //   borderTopRightRadius: 30,
  //   paddingHorizontal: 20,
  //   paddingVertical: 30
  // },
  // text_header: {
  //       color: '#fff',
  //   fontWeight: 'bold',
  //   fontSize: 30
  // },
});