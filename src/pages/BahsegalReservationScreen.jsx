import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import BahsegalHeader from '../components/BahsegalHeader';
import BahsegalButtonComponent from '../components/BahsegalButtonComponent';
import AddressIcon from '../assets/address_icon.png';

const InputField = ({
  placeholder,
  value,
  onChangeText,
  style,
  lines = 1,
  multiline = false,
  textAlignVertical = 'middle',
}) => (
  <TextInput
    style={[styles.textInput, {...style}]}
    placeholderTextColor={COLORS.black}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    numberOfLines={lines}
    multiline={multiline}
    textAlignVertical={textAlignVertical}
  />
);

export default function () {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    table: '',
    time: '',
    date: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleReservation = () => {
    navigation.navigate('DrawerNavigator', {
      screen: 'BahsegalReserveSuccessScreen',
    });
  };

  return (
    <View style={styles.container}>
      <BahsegalHeader />

      <Text style={styles.title}>Резерв столика</Text>

      <View style={{height: height * 0.65}}>
        <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
          <View style={styles.nameContainer}>
            <TextInput
              style={styles.nameTextInput}
              placeholderTextColor={COLORS.black}
              placeholder={'Имя...'}
              value={formData.name}
              onChangeText={text => handleInputChange('name', text)}
            />
            <Image source={AddressIcon} style={styles.nameIcon} />
          </View>

          <Text style={styles.subtitle}>Номер столика</Text>
          <InputField
            placeholder={'Номер столика'}
            value={formData.phone}
            onChangeText={text => handleInputChange('table', text)}
          />

          <Text style={styles.subtitle}>Номер телефона</Text>
          <InputField
            placeholder={'Номер телефона'}
            value={formData.table}
            onChangeText={text => handleInputChange('phone', text)}
          />

          <Text style={styles.subtitle}>Ваше имя</Text>
          <InputField
            placeholder={'Ваше имя'}
            value={formData.time}
            onChangeText={text => handleInputChange('name', text)}
          />

          <Text style={styles.subtitle}>Ваше имя</Text>
          <InputField
            placeholder={'Комментарий'}
            value={formData.date}
            onChangeText={text => handleInputChange('comment', text)}
            style={{
              height: 120,
              verticalAlign: 'middle',
            }}
            numberOfLines={4}
            multiline={true}
            textAlignVertical={'top'}
          />
        </ScrollView>
      </View>

      <BahsegalButtonComponent
        text={'Зарезервировать'}
        style={styles.button}
        onPress={handleReservation}
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
    margin: 20,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: '#646464',
    width: '100%',
    paddingLeft: 10,
    marginVertical: 5,
  },
  main: {
    paddingVertical: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    backgroundColor: COLORS.white,
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 5,
    marginBottom: 20,
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
    backgroundColor: '#FFEEDA',
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  nameTextInput: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    fontSize: 13,
    fontFamily: FONTS.medium,
    textAlign: 'left',
    color: COLORS.background,
    paddingLeft: 55,
    borderRadius: 5,
    backgroundColor: '#FFEEDA',
  },
  nameContainer: {
    width: '95%',
    position: 'relative',
  },
  nameIcon: {
    width: 25,
    height: 25,
    objectFit: 'contain',
    position: 'absolute',
    top: 22,
    left: 20,
  },
});
