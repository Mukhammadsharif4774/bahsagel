import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import BahsegalHeader from '../components/BahsegalHeader';
import BahsegalButtonComponent from '../components/BahsegalButtonComponent';
import ThankOrder from '../assets/order_thank_icon.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'BahsegalHomeScreen'});
  };

  return (
    <View style={styles.container}>
      <BahsegalHeader />

      <Image source={ThankOrder} style={styles.successIcon} />
      <View style={styles.qrContainer}>
        <QRCode
          value="https://lambic.uz/"
          size={Dimensions.get('window').width / 2.5}
          color={'#00BBDC'}
        />

        <Text style={styles.title}>Спасибо за заказ!</Text>
      </View>

      <BahsegalButtonComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: '20%',
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  successIcon: {
    width: width * 0.5,
    height: width * 0.5,
    alignSelf: 'center',
    marginTop: '5%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: COLORS.main,
    marginTop: 30,
    fontFamily: FONTS.black,
  },
});
