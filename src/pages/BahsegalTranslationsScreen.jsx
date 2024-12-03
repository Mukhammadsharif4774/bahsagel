import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BahsegalHeader from '../components/BahsegalHeader';
import IPL from '../assets/IPL.png';
import NHL from '../assets/NHL.png';
import NBA from '../assets/NBA.png';
import Super from '../assets/Super_League.png';
import Logo from '../assets/logo.png';

export default function () {
  return (
    <View style={styles.container}>
      <BahsegalHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={styles.translation}>
          <View style={styles.partOne}>
            <Image source={IPL} style={styles.icon} />
            <Text style={styles.time}>14.07</Text>
          </View>

          <View style={styles.partTwo}>
            <Text style={styles.club}>Kolkata Knight Raiders</Text>

            <Text style={styles.clubSecond}>Royal Challengers</Text>
          </View>
        </View>

        <View style={styles.translation}>
          <View style={styles.partOne}>
            <Image source={NHL} style={styles.icon} />
            <Text style={styles.time}>29.07</Text>
          </View>

          <View style={styles.partTwo}>
            <Text style={styles.club}>Philadelphia Flyers</Text>

            <Text style={styles.clubSecond}>Pittsburgh Penguins</Text>
          </View>
        </View>

        <View style={styles.translation}>
          <View style={styles.partOne}>
            <Image source={NBA} style={styles.icon} />
            <Text style={styles.time}>24.07</Text>
          </View>

          <View style={styles.partTwo}>
            <Text style={styles.club}>Golden State Warriors</Text>

            <Text style={styles.clubSecond}>Minnesota Timberwolves</Text>
          </View>
        </View>

        <View style={styles.translation}>
          <View style={styles.partOne}>
            <Image source={Super} style={styles.icon} />
            <Text style={styles.time}>22.07</Text>
          </View>

          <View style={styles.partTwo}>
            <Text style={styles.club}>Barcelona</Text>

            <Text style={styles.clubSecond}>Manchester United</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
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
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    margin: 20,
  },
  translation: {
    width: width * 0.9,
    alignSelf: 'center',
    height: 100,
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 5,
  },
  partOne: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  partTwo: {
    width: '60%',
  },
  icon: {
    width: 80,
    height: 50,
    objectFit: 'contain',
  },
  time: {
    fontSize: 18,
    fontFamily: FONTS.black,
    color: COLORS.black,
  },
  club: {
    height: '50%',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: COLORS.black,
  },
  clubSecond: {
    height: '50%',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: COLORS.black,
    width: '80%',
    alignSelf: 'center',
  },
  logoContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.8,
    height: 200,
    resizeMode: 'contain',
  },
});
