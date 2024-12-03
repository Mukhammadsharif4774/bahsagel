import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from './AppContext';
import {COLORS, FONTS} from '../helpers/colors';
import {bahsegalProducts} from '../helpers/bahsegalProducts';
import TrashIcon from '../assets/delete_icon.png';

const BahsegalCartItemComponent = ({item}) => {
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);
  const [carts, setCarts] = useState([]);

  const updateCart = async updatedCarts => {
    await AsyncStorage.setItem('cartList', JSON.stringify(updatedCarts));
    setCarts(updatedCarts);
    toggleRefresh(!shouldRefresh);
  };
  const increment = () => {
    const updatedCarts = carts.map(product =>
      product.name === item.name
        ? {...product, count: product.count + 1}
        : product,
    );
    updateCart(updatedCarts);
  };

  const decrement = () => {
    const updatedCarts = carts
      .map(product => {
        if (product.name === item.name) {
          const newCount = Math.max(product.count - 1, 0);
          return {...product, count: newCount};
        }
        return product;
      })
      .filter(product => product.count > 0); // Remove item if count is zero
    updateCart(updatedCarts);
  };

  const deleteItem = () => {
    const updatedCarts = carts.filter(product => product.name !== item.name);
    updateCart(updatedCarts);
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      setCarts(cartList ? JSON.parse(cartList) : []);
    };
    fetchCartItems();
  }, [shouldRefresh]);

  const productImage = bahsegalProducts.find(p => p.name === item.name)?.image;

  return (
    <View style={styles.container}>
      <Image source={productImage} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.currencyText}>{`${item.price} $`}</Text>

        <Text style={styles.title}>{item.name}</Text>

        <View style={styles.row}>
          <View style={styles.countContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() =>
                carts.find(product => product.name === item.name)?.count > 1
                  ? decrement()
                  : deleteItem()
              }>
              <Text style={styles.plusMinus}>-</Text>
            </TouchableOpacity>

            <Text style={styles.count}>
              {carts.find(product => product.name === item.name)?.count || 0}
            </Text>

            <TouchableOpacity style={styles.actionButton} onPress={increment}>
              <Text style={styles.plusMinus}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.deleteButton} onPress={deleteItem}>
            <Image source={TrashIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15,
  },
  image: {
    width: Dimensions.get('window').width * 0.35,
    height: 150,
  },
  details: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '80%',
  },
  currencyText: {
    fontSize: 20,
    fontFamily: FONTS.medium,
    color: COLORS.red,
    paddingVertical: 2,
    borderRadius: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  count: {
    width: 40,
    height: 40,
    color: COLORS.black,
    backgroundColor: COLORS.gray,
    elevation: 5,
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: 20,
    fontFamily: FONTS.black,
    marginLeft: 5,
    marginRight: 5,
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
  },
  deleteButton: {
    marginLeft: 10,
  },
  icon: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
  plusMinus: {
    width: 40,
    height: 40,
    color: COLORS.black,
    backgroundColor: COLORS.white,
    elevation: 5,
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: 20,
    fontFamily: FONTS.black,
  },
});

export default BahsegalCartItemComponent;
