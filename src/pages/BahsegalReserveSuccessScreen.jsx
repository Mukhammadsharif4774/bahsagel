import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import BahsegalHeader from '../components/BahsegalHeader';
import BahsegalButtonComponent from '../components/BahsegalButtonComponent';
import ReserveSuccess from '../assets/reserve_icon.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'BahsegalHomeScreen'});
  };

  return (
    <View style={styles.container}>
      <BahsegalHeader />

      <Image
        source={ReserveSuccess}
        style={{
          alignSelf: 'center',
          width: width * 0.5,
          height: width * 0.5,
          objectFit: 'contain',
          marginTop: '30%',
        }}
      />

      <Text style={styles.title}>Спасибо за резерв!</Text>

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
    marginVertical: 20,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    color: COLORS.main,
    marginTop: 30,
    fontFamily: FONTS.black,
  },
});
