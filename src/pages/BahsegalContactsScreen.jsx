import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import BahsegalHeader from '../components/BahsegalHeader';
import BahsegalButtonComponent from '../components/BahsegalButtonComponent';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'BahsegalHomeScreen'});
  };

  const renderTextInput = placeholder => (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={COLORS.background}
        editable={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <BahsegalHeader />

      <Text style={styles.title}>Контакты</Text>

      <View style={styles.main}>
        {renderTextInput('Страна')}
        {renderTextInput('Город')}
        {renderTextInput('Индекс')}
        {renderTextInput('Номер телефона')}
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
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    margin: 25,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.placeholder,
    width: '100%',
    paddingLeft: 30,
    marginVertical: 10,
  },
  main: {
    paddingVertical: 20,
    paddingBottom: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    width: width * 0.95,
    alignSelf: 'center',
    height: height * 0.55,
  },
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    height: 50,
    width: '95%',
    marginVertical: 10,
    fontSize: 13,
    fontFamily: FONTS.medium,
    textAlign: 'left',
    color: COLORS.background,
    paddingLeft: 20,
    borderRadius: 5,
    backgroundColor: '#EDEDED',
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
});
