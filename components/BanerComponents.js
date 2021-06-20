import * as React from 'react';
import {
  StyleSheet, View, Image,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground
} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


const { width } = Dimensions.get('window');
const section_banner = require('../assets/images/banner_cf1.png');
const section_banner1 = require('../assets/images/banner_cf2.png');
const section_banner2 = require('../assets/images/bannerht.png');
const section_banner3 = require('../assets/images/bannerht2.png');
const colors = [section_banner, section_banner1, section_banner2, section_banner3];


const BanerComponents = () => {
  return (
    <View style={styles.sectionContainer}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={2}
        // showPagination
        data={colors}
        renderItem={({ item }) => (
          <View style={[styles.child, { backgroundColor: item }]}>
            <ImageBackground source={item} style={styles.sectionImage}>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
};
export default BanerComponents;
var styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 4,
  },

  sectionImage: {
    width: width - 0,
    height: 200,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

