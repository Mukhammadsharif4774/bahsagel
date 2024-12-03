import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import BahsegalHomeScreen from './pages/BahsegalHomeScreen';
import BahsegalCartScreen from './pages/BahsegalCartScreen';
import BahsegalCartSuccessScreen from './pages/BahsegalCartSuccessScreen';
import BahsegalReservationScreen from './pages/BahsegalReservationScreen';
import BahsegalReserveSuccessScreen from './pages/BahsegalReserveSuccessScreen';
import BahsegalContactsScreen from './pages/BahsegalContactsScreen';
import BahsegalEventsScreen from './pages/BahsegalEventsScreen';
import BahsegalEventDetailScreen from './pages/BahsegalEventDetailScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/cart_drawer_icon.png';
import Logo from './assets/logo.png';
import BahsegalTranslationsScreen from './pages/BahsegalTranslationsScreen';
import BackgroundImage from './assets/main_backgroud.png';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.main,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'ГЛАВНАЯ', screen: 'BahsegalHomeScreen'},
    {label: 'КОРЗИНА', screen: 'BahsegalCartScreen'},
    {label: 'ТРАНСЛЯЦИИ', screen: 'BahsegalTranslationsScreen'},
    {label: 'КОНТАКТЫ', screen: 'BahsegalContactsScreen'},
    {label: 'РЕЗЕРВ СТОЛИКА', screen: 'BahsegalReservationScreen'},
    {label: 'СОБЫТИЯ', screen: 'BahsegalEventsScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <ImageBackground style={styles.container} source={BackgroundImage}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('BahsegalCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const drawerScreens = [
  {name: 'BahsegalHomeScreen', component: BahsegalHomeScreen},
  {name: 'BahsegalCartScreen', component: BahsegalCartScreen},
  {name: 'BahsegalCartSuccessScreen', component: BahsegalCartSuccessScreen},
  {name: 'BahsegalReservationScreen', component: BahsegalReservationScreen},
  {
    name: 'BahsegalReserveSuccessScreen',
    component: BahsegalReserveSuccessScreen,
  },
  {name: 'BahsegalContactsScreen', component: BahsegalContactsScreen},
  {name: 'BahsegalEventsScreen', component: BahsegalEventsScreen},
  {name: 'BahsegalEventDetailScreen', component: BahsegalEventDetailScreen},
  {name: 'BahsegalTranslationsScreen', component: BahsegalTranslationsScreen},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.8,
    height: 150,
    resizeMode: 'contain',
  },
  mainContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: width,
  },
  drawerItem: {
    justifyContent: 'center',
    width: '80%',
    marginTop: 15,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingVertical: 15,
    borderRadius: 35,
  },
  itemText: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    textAlign: 'center',
  },
  cartIcon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute',
    top: 100,
  },
});
