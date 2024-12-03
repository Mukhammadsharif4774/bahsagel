import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import BahsegalHeader from '../components/BahsegalHeader';
import BurgerFest from '../assets/event_1.png';
import MasterClass from '../assets/event_2.png';
import Culinar from '../assets/event_3.png';
import RetroAmerica from '../assets/event_4.png';
import Night from '../assets/event_5.png';
import BackgroundImage from '../assets/main_backgroud.png';

export default function () {
  const navigation = useNavigation();
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BahsegalHeader />

      <View style={styles.main}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'BahsegalEventDetailScreen',
              params: {image: BurgerFest},
            })
          }>
          <Text style={styles.name}>Бургерный Фестиваль</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'BahsegalEventDetailScreen',
              params: {image: MasterClass},
            })
          }>
          <Text style={styles.name}>Мастер-Класс</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'BahsegalEventDetailScreen',
              params: {image: Culinar},
            })
          }>
          <Text style={styles.name}>Кулинарные Соревнования</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'BahsegalEventDetailScreen',
              params: {image: RetroAmerica},
            })
          }>
          <Text style={styles.name}>Тематический Вечер</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'BahsegalEventDetailScreen',
              params: {image: Night},
            })
          }>
          <Text style={styles.name}>Вечер Интернациональной Кухни</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.main,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.white,
    margin: 20,
  },
  image: {
    width: '100%',
    height: height * 0.5,
    objectFit: 'contain',
  },
  button: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  name: {
    justifyContent: 'center',
    width: '80%',
    marginTop: 15,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingVertical: 20,
    borderRadius: 35,
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    textAlign: 'center',
    alignSelf: 'center',
  },
  time: {
    fontSize: 15,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    width: '25%',
    marginLeft: 15,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height / 5,
  },
});
