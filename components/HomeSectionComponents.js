import * as React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');
const item_image_1 = require('../assets/images/AMERICANO.jpg');
const item_image_2 = require('../assets/images/CARAMELMACCHIATO.jpg');
const item_image_3 = require('../assets//images/ESPRESSO.jpg');
const item_image_4 = require('../assets/images/MACCHIATO.jpg');

const ProductItem = ({ image, name, price, navigation }) => (

  <View>
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetail")}>
      <View style={styles.itemContainer}>
        <Image source={image} style={styles.itemImage} />
        <Text style={styles.itemName} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.itemPrice}>{price}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const HomeSectionComponent = ({ navigation }) => {
  return (
    <View style={styles.sectionContainer}>
      {/*  */}
      <Text style={styles.sectionTitle}>Coffee - Study</Text>
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {[
            { image1: item_image_1, image2: item_image_2 },
            { image1: item_image_2, image2: item_image_4 },
            { image1: item_image_4, image2: item_image_1 },
            { image1: item_image_1, image2: item_image_2 },
          ].map((e, index) => (
            <View key={index.toString()}>
              {/*  */}
                <ProductItem
                  name="AMERICANO"
                  image={e.image1}
                  price="30.000đ"
                  navigation={navigation}
                />
              {/*  */}
              <ProductItem
                name="CARAMEL MACCHIATO"
                image={e.image2}
                price="45.000đ"
                navigation={navigation}
              />
              {/*  */}
            </View>

          ))}
        </View>
      </ScrollView>
      {/*  */}
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>XEM THÊM </Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default HomeSectionComponent;

var styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  //
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  //
  listItemContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 120,
    borderRadius: 6,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
  //
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
  divider: {
    height: 10,
    backgroundColor: '#F5F5F5'
  },
});
