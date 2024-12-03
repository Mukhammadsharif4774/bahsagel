import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import BahsegalHeader from '../components/BahsegalHeader';
import BahsegalMenuComponent from '../components/BahsegalMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {bahsegalProducts} from '../helpers/bahsegalProducts';

export default function BahsegalHomeScreen() {
  return (
    <View style={styles.container}>
      <BahsegalHeader />

      <Text style={styles.title}>Наши лучшие бургеры</Text>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {bahsegalProducts.map((product, index) => (
          <BahsegalMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: 30,
    paddingLeft: 20,
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
