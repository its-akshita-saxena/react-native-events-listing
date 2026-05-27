import React from 'react';
import AppProvider from './context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Importing Screens
import HomeScreen from './screens/HomeScreen';
import ScannerScreen from './screens/ScannerScreen';
import WishlistScreen from './screens/WishlistScreen';
import ReservationsTabScreen from './screens/ReservationsTabScreen';

import ReservationScreen from './screens/ReservationScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabs = () => {

  return (

    <Tab.Navigator

      screenOptions={({ route }) => ({

        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#000',
          height: 65,
          borderTopWidth: 0,
        },

        tabBarActiveTintColor: '#f5c542',

        tabBarInactiveTintColor: '#fff',

        tabBarIcon: ({ color, size }) => {

          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          }

          else if (route.name === 'Scanner') {
            iconName = 'qr-code';
          }

          else if (route.name === 'Wishlist') {
            iconName = 'heart';
          }

          else if (route.name === 'Reservations') {
            iconName = 'ticket';
          }

          return (
            <Icon name={iconName} size={size} color={color} />
          );
        },

      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Scanner" component={ScannerScreen} />

      <Tab.Screen name="Wishlist" component={WishlistScreen} />

      <Tab.Screen name="Reservations" component={ReservationsTabScreen} />

    </Tab.Navigator>
  );
};

const App = () => {

  return (
    <AppProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
              {/* Bottom Tabs */}
              <Stack.Screen name="MainTabs" component={MainTabs} />
              {/* Success Screen */}
              <Stack.Screen name="ReservationScreen" component={ReservationScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </AppProvider>
  );
};
export default App;