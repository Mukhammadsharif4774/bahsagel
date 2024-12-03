import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../components/AppContext';
import BahsegalCartItemComponent from '../components/BahsegalCartItemComponent';
import BahsegalButtonComponent from '../components/BahsegalButtonComponent';
import BahsegalHeader from '../components/BahsegalHeader';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import EmptyText from '../assets/cart_empty_icon.png';

export default function () {
  const navigation = useNavigation();
  const {shouldRefresh} = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const storedCart = await AsyncStorage.getItem('cartList');
      setCart(storedCart ? JSON.parse(storedCart) : []);
    };

    fetchCart();
  }, [shouldRefresh]);

  useEffect(() => {
    if (cart.length) {
      const calculatedPrice = cart.reduce(
        (sum, item) => sum + item.price * item.count,
        0,
      );
      setTotalPrice(calculatedPrice);
    } else {
      setTotalPrice(0);
    }
  }, [cart]);

  const handleOrder = () => {
    const destinationScreen = cart.length
      ? 'BahsegalCartSuccessScreen'
      : 'BahsegalHomeScreen';
    navigation.navigate('DrawerNavigator', {screen: destinationScreen});
  };

  return (
    <View style={styles.container}>
      <BahsegalHeader />

      <Text style={styles.title}>Корзина</Text>

      {cart.length ? '' : <Image style={styles.empty} source={EmptyText} />}

      {cart.length ? (
        <View style={{height: height * 0.65}}>
          <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
            {cart.map((item, index) => (
              <BahsegalCartItemComponent item={item} key={index} />
            ))}
          </ScrollView>
        </View>
      ) : (
        ''
      )}

      {cart.length ? (
        <View style={[styles.row, styles.summaryContainer]}>
          <Text style={styles.sumTitle}>Итого</Text>
          <Text style={styles.sum}>${totalPrice}</Text>
        </View>
      ) : (
        ''
      )}

      <BahsegalButtonComponent
        text={cart?.length ? 'Разместить заказ' : 'На главную'}
        style={styles.orderButton}
        onPress={handleOrder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: COLORS.white,
  },
  flex: {
    height: 200,
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: 30,
    paddingLeft: 20,
  },
  main: {
    paddingBottom: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 40,
  },
  empty: {
    marginTop: 20,
    width: width * 0.5,
    height: height * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  summaryContainer: {
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    position: 'absolute',
    bottom: 120,
  },
  sumTitle: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    textAlign: 'center',
  },
  sum: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    textAlign: 'center',
    marginLeft: 20,
  },
  orderButton: {
    position: 'absolute',
    bottom: 50,
  },
});
